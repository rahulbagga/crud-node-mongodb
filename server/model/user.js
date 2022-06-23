const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mob:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    }
})
const Userdb = mongoose.model('User',userSchema);
module.exports = Userdb;