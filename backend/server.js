const express = require("express");
const mongoose  = require("mongoose");
const bodyParser = require("body-parser")
const cors = require("cors");
const jwt = require("jsonwebtoken");
const createAdminUser =  require("./script/createAdmin")

const userRoutes = require("./routes/user")
const userLeaveRoutes = require("./routes/userleave")


const app = express();

app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/leave_app")

//createAdminUser("test@admin.com","123","test","admin")
var jsonParser = bodyParser.json()
// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
//app.use(bodyParser.json())

app.get("/",function(req,res){
    res.send("leave app server running")
})

// user routes
app.use("/user",jsonParser,userRoutes)
app.use("/userleave",jsonParser,userLeaveRoutes)


app.listen(5000,function(){
    console.log("server running on 5000")
})

