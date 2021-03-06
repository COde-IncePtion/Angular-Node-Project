var express = require('express');
var router = express.Router();
var bcrypt = require("bcryptjs");

var User = require("../models/user");

router.post('/', function (req, res, next) {
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName, 
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10), // we are encrypting the password, we should store it in the database using ssl
        phoneNumber: req.body.phno
    });

    user.save(function(err, result){
        if(err){
            return res.status(500).json({
                tittle: " error in creating the user",
                error: err
            });
        }

        res.status(201).json({
            message: "User is created successfully",
            obj: result
        });
    });
});

module.exports = router;
