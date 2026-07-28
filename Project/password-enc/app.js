import express from 'express';

import { Register } from './model/registerModel.js';
import { getConnection } from './config/db.js';
import { hashedPassword, matchPassword } from './config/passwordenc.js';

const app = express();
const port = 3040;

app.use(express.json())
getConnection();



app.get("/", (req, res) => {
    res.send(`Working `)
})


app.post("/register", async (req, res) => {
    try {
        let regUser = await new Register({
            fname: req.body.fname,
            email: req.body.email,
            password: await hashedPassword(req.body.password)
        })
        regUser.save().then(() => {
            res.send(regUser)
        }).catch(err => {
            res.send(err)
        })
    } catch (err) {
        console.log(err);

    }
})


app.post("/login", async (req, res) => {
    try {
        let { email, password } = req.body;
        let result = await Register.findOne({ email: email })
        console.log(result);
        
        if(result){
             const isMatch = await matchPassword(password , result.password); 
                if(isMatch){

                    res.send(`Login Success`)
                }
                else{
                    res.send({
                        message:"Password does not match"
                    })
                }
        }
        else{
            res.send("Email not found")
        }

    } catch (err) {
        console.log(err);

    }
})

app.listen(port, () => {
    console.log(`Listening at ${port}`);

})