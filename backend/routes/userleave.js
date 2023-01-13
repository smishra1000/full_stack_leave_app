const express = require("express");
const UserLeave = require("../models/userleave")
const router = express.Router()

router.post("/apply", function (req, res) {
    var userLeave = new UserLeave(
        {
            reason: req.body.reason,
            status: "pending",
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            username: req.body.username,
            leaveType: req.body.leaveType
        })

    userLeave.save().then(function (user) {
        if (user) {
            res.send(user)
        } else {
            res.status(500).send("some thing went wrong while applying leave")
        }
    })

})
router.get("/:username/myleave", function (req, res) {
    UserLeave.find({username:req.params.username}).then(function (leaves) {
        if (leaves) {
            res.send(leaves)
        } else {
            res.status(500).send("some thing went wrong while fetching leaves")
        }
    })

})


module.exports = router;