const express = require("express");
const UserLeave = require("../models/userleave")
const User = require("../models/user")
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

router.get("/allleave", function (req, res) {
    UserLeave.find().then(function (leaves) {
        if (leaves) {
            res.send(leaves)
        } else {
            res.status(500).send("some thing went wrong while fetching leaves")
        }
    })

})

router.put("/:leaveId/approvereject", function (req, res) {
    UserLeave.findByIdAndUpdate(req.params.leaveId,{status:req.body.status},).then(function (leave) {
        if (leave) {
            const difference = new Date(leave.endDate)  - new Date(leave.startDate)
            const days = difference/(1000*60*60*24)
            console.log(days,leave)
            User.findOneAndUpdate({email:leave.username},{approvedLeaveCount:Number(days)},function(err,result){
                if(err){
                    return res.send(err)
                }else {
                    res.send(result)
                }
            })
        } else {
            res.status(500).send("some thing went wrong while approving leave")
        }
    })

})


module.exports = router;