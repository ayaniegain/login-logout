const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        trim:true,
    },
    email:{
        type:String,
        required: true,
        trim:true,
    },
    password:{
        type:String,
        required: true,
    },
    isAvatarImageSet:{
        type:Boolean,
        default: false,
    },
    avatarImage:{
        type:String,
        default: '',
    }
  
},{timeseries:true});

module.exports = mongoose.model("users", userSchema);