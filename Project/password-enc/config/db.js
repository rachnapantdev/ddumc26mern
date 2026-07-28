import mongoose from "mongoose"

export const getConnection = ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/UMS").then(()=>{
        console.log('Database connected');
        
    }).catch(err=>{
        console.log(`There is some error`);
        
    })
}