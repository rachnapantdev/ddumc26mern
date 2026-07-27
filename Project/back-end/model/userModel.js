import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fname: {
        type: String,
        require: true
    },
    lname: String,
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true,
    },
    phone: {
        type: String,
        require: true
    },
    isActive: Boolean
}, {
    timestamps: true
})

export const User = mongoose.model("User", userSchema);