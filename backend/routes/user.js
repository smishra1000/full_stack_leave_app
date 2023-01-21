const express = require("express");
const User = require("../models/user")
const router = express.Router();
const jwt = require("jsonwebtoken")

router.post("/signup", function (req, res) {
    var user = new User({ firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, password: req.body.password,role:"user" })
    User.findOne({ email: req.body.email }, function (err, found) {
        if (found) {
            res.status(400).send({message:"user already exist with given email"})
        } else {
            user.save().then(function (user) {
                if (user) {
                    res.status(200).send(user)
                } else {
                    res.status(500).send({message:"some thing went wrong while signup"})
                }
            })

        }
    })

})

router.post("/login", function (req, res) {
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) {
            res.send(err);
        }
        if (!user) {
            res.send("user not found")
        }
        else {
            if (user.password === req.body.password) {
                const token = jwt.sign({ id: user._id, email: user.email }, "testkey");

                res.send({ data: user, token: token })
            } else {
                res.send("email/password wrong")
            }
        }

    })
})

router.get("/allusers", function (req, res) {
    User.find().then(function (users) {
        if (users) {
            res.send(users)
        } else {
            res.status(500).send("some thing went wrong while fetching users list")
        }
    })

})

router.get("/:username/balance", function (req, res) {
    User.findOne({email:req.params.username}).then(function (user) {
        if (user) {
            res.send(user)
        } else {
            res.status(500).send("some thing went wrong while fetching leaves")
        }
    })

})

module.exports = router;