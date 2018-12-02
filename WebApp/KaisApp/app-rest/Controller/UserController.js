var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var User = require('./../model/User');

router.get('/users', function (req, res) {
    User.getusers(function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

router.post('/create', function (req, res) {
    User.createuser(req.body,function(err,count){
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.json(req.body);
        }
    });
});

router.get('/login/:username&:password', function (req, res){
    User.connexion(req.params,function(err, rows){
        if(err){
            res.status(400).json(err);
        }
        else{
            res.json(rows);
        }
    });
});

/*
router.get('/', function(req, res, next){
res.locals.connection.query('SELECT * from users', function(error, results, fields){
if(error){
res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
} else {
res.send(JSON.stringify({"status": 200, "error": null, "response": results}));}
});
});
*/
module.exports = router;
