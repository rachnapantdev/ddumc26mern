import mongoose from "mongoose"

export const getConnection = (url)=>{
    mongoose.connect(url).then(()=>{
        console.log('Database connected');
        
    }).catch(err=>{
        console.log(`There is some error`);
        
    })
}