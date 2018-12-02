var db = require('../../db');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var id;
var nom;
var prenom;

var salt;
var hash;

var User = {
    getusers: function(callback)
    {
        return db.query('SELECT * from user', callback);
    },
    connexion: function(credential, callback){
        return db.query('Select id from user where login = ? and mdp = ?',[credential.username, credential.password]);
    },
    createuser: function (User, callback) {
        return db.query('Insert into user(nom, prenom,identifiant,mdp) values(?, ?, ?, ?)',[User.nom, User.prenom, User.identifiant, User.password], callback);
    },
    generateJwt: function(callback){
        var expiry = new Date();
        expiry.setDate(expiry.getDate() + 7);

        return jwt.sign({
            _id: this.id,
            _prenom: this.prenom,
            _nom: this.nom,
            exp: paseInt(expiry.getTime() / 1000)
        }, "le truc secret");
    },
    setPassword: function(password){
        this.salt = crypto.randomBytes(16).toString('hex');
        this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    },
    validPassword: function(password){
        var hash = crypto.pbkd2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');

        return this.hash === hash;
    }
}


module.exports = User;
