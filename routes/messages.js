var express = require('express');
var router = express.Router();

var Message = require("../models/message");


router.get("/",function(req, res, next){
    Message.find()
        .exec(function(err, messages){
            if(err){
                return res.status(500).json({
                    title: "Fetching failed due to error",
                    error: err
                });
            }
            res.status(200).json({
                message: "Data fetched sucessfully",
                obj: messages
            });

        });

});

router.post('/', function (req, res, next) {
    var message = new Message({
        content: req.body.content
    });
    message.save(function(err, result){
        if(err){
            return res.status(500).json({
                title: "Insertion Failed due to error",
                error: err
            });
        }
        res.status(201).json({
            message: "Insertion done successfully",
            obj: result
        });
    });
});


router.patch("/:id",function(req, res, next){
    Message.findById(req.params.id, function(err, message){
        if(err){
            return res.status(500).json({
                title: "Error occured while updating the message",
                error: err
            });
        }
        if(!message){
            // if message is not found
            return res.status(500).json({
                title: "No message found",
                error: {message:"Message not found"}
            });
        }
        message.content = req.body.content;
        message.save(function(err, result){
                if(err){
                    return res.status(500).json({
                        title: "Insertion Failed due to error",
                        error: err
                    });
                }
                res.status(200).json({
                    message: "Updation done successfully",
                    obj: result
                });
            });
        });
});

module.exports = router;
