import { User } from "../models/userSchema.js"

export const saveUser = (req, res) => {

    const newUser = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        phone: req.body.phone,
        isActive: req.body.isActive
    })

    newUser.save().then(() => {
        console.log('Data Saved');
        res.send(newUser)

    }).catch(err => {
        console.log(err);

    })
}

export const getAllUsers = async (req, res) => {

    try {
        const allUser = await User.find({});
        res.send(allUser)

    } catch (err) {
        console.log(err);

    }

}

export const getUserByID = async(req, res) => {
    const {id} = req.params
    try{
        let result = await User.find({_id: id});
        res.send(result)
    }catch(err){
        res.send(err)
    }
}


// update Data 

export const updateUserById = async(req, res)=>{
  try{
    let updateData =   await User.findOneAndUpdate({_id:req.params.id},{
        fname:req.body.fname,
        lname:req.body.lname,
        phone:req.body.phone, 
        isActive:req.body.isActive
    });
    res.send(updateData)
  } catch(err){
    console.log(err);
    
  }
}

// Delete Data

export  const deteleUserByID = async (req, res)=>{
    try{
        let deletedUser = await User.findByIdAndDelete({_id: req.params.id})
        res.send(deletedUser)

    }catch(err){
        res.send(err)
    }
}