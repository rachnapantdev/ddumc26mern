import express from 'express';
import dotenv from 'dotenv'
import { getConnection } from './dbconnect.js';
import { User } from './models/userSchema.js';
import { deteleUserByID, getAllUsers, getUserByID, saveUser, updateUserById } from './api-work/userApi.js';

const app =  express();
// Middleware
app.use(express.json())

dotenv.config();

const port =  process.env.PORT;

getConnection(process.env.dbCon);


app.get("/",(req, res)=>{
    res.send(`<h1> Server is working  </h1>`)
})

app.post("/save-user",(req, res)=>{
    const userData = new User({
        fname:"Pari",
        lname:'Goel',
        phone:9809890909,
        isActive:true
    });

    userData.save().then(()=>{
        console.log('Data saved'+ userData);
        
    }).catch((err)=>{
        console.log(`Some error occured : ${err}`);
        
    })
    res.json(userData)

})
app.post("/save", saveUser);

app.get("/all", getAllUsers)

app.get("/all/:id",getUserByID)

// put
app.put("/update/:id",updateUserById)

// delete

app.delete('/delete/:id',deteleUserByID)
app.listen(port, ()=>{
    console.log(`Working fine with ${port}`);
    
})
