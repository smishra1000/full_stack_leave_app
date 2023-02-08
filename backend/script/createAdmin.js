
const User = require("../models/user")


function createAdminUser(email,password,firstname,lastname) {
    console.log(email)
    var user = new User({ firstName: firstname, lastName: lastname, email: email, password: password, role: "admin" })
    User.findOne({ email:email }, function (err, found) {
        if(err){
            console.log(err)
        }
        console.log(found)
        if (found) {
            console.log("admin already esit with given email")
        } else {
            console.log("here i am ")
            user.save().then(function (user) {
                if (user) {
                    console.log("admin created successfully")
                } else {
                    console.log("something went wrong while creation of admin")
                }
            })

        }
    })
}

module.exports = createAdminUser;

// createAdminUser("test@admin.com","123","test","admin");