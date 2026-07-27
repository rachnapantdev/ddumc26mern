import express from 'express';
import dotenv  from 'dotenv'
import { userRouter } from './router/userRouter.js';
import { getConnection } from './config/db.js';
import cors from 'cors'
const app =  express();
dotenv.config();
app.use(cors())
// Middleware : express.json()
app.use(express.json())
const port =  process.env.PORT;
const dburl = process.env.DB_URL

getConnection(dburl)

// use middleware here for Routing
app.use(userRouter)


app.listen(port,()=>{
    console.log(`Server is listening at localhost:${port} `);
    
})