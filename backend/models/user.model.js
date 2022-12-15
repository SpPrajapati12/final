const  mongoose  = require("mongoose");


const User = new mongoose.Schema({
    fullname : {type : String, required :true},
    email : {type : String, required :true, unique : true},
    mobileNo : {type : Number, required :true},
    password : {type : String, required :true},
},{collection : "users"})

const model = mongoose.model("UserData",User)

module.exports = model
