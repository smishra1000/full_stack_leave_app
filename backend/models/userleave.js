const mongoose = require("mongoose")

var Schema = mongoose.Schema;

var UserLeaveSchema = new Schema({
    username: {type:String},
    startDate: {type:String},
    endDate:{type:String},
    reason:{type:String},
    status:{type:String},
    leaveType:{type:String},
})


module.exports = mongoose.model("UserLeave",UserLeaveSchema)
