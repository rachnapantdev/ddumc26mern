import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fname:String,
    lname:String,
    phone:String,
    isActive:Boolean
});


export const User = mongoose.model("User",userSchema);