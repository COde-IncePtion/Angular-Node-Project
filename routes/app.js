var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/insertuser', function (req, res, next) {
    var user=new User({firstName:'ashish',
                       lastName:'rawat',
                       email:'ashishr350@gmail.com',
                       password:'collection',
                       phoneNumber:'7767985881'
                    });
    user.save();
    res.render('index');
});


module.exports = router;
