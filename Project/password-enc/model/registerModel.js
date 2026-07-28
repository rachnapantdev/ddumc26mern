import mongoose from "mongoose";

let registerSchema = mongoose.Schema({
    fname:String,
    email:{
        type:String,  
        unique:true
    },
    password:String 
})

export const Register = mongoose.model("register", registerSchema)