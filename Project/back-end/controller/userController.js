import { User } from "../model/userModel.js";

export const getAllUsers = async (req, res) => {
    try {
        let result = await User.find({})
        res.send(result)
    } catch (err) {
        console.log(err);

    }
}


export const getUserById = async (req, res) => {
    let id = req.params;
    try {

    } catch (err) {
        res.send(err)
    }
}

export const saveData = async (req, res) => {
    try {
        let newUser = new User({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            phone: req.body.phone,
            isActive: req.body.isActive

        });
        newUser.save().then(() => {
            res.send(newUser)
        }).catch(err => {
            res.send(err)
        })
    } catch (err) {
        res.send(err)
    }
}

export const updateData = async (req, res) => {
    try {

    } catch (err) {

    }
}

export const deleteData = async (req, res) => {
    // console.log(id);

    try {
        let deletedUser = await User.findByIdAndDelete({ _id: req.params.id })
        res.send(deletedUser);
    } catch (err) {
        res.send(err)
    }
}