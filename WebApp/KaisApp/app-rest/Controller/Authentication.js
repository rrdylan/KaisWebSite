var User = require('./../model/User');

module.exports.register = function(req, res) {
    var user = new User();

    user.name = req.body.name;
    user.prenom = req.body.prenom;

    user.setPassword(req.body.password);

    user.save(function(err) {
        var token;
        token = user.generateJwt();
        res.status(200);
        res.json({
            "token" : token
        });
    });
};

module.exports.login = function(req, res){
    User.authenticate(function(err, user, info){
        var token;

        if(err){
            res.status(404).json(err);
            return;
        }

        if(user){
            token = user.generateJwt();
            res.status(200);
            res.json({
                "token" : token
            });
        } else {
            // If user is not found
            res.status(401).json(info);
        }
        return (req, res)
    });
};
