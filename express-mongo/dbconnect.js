import mongoose from "mongoose"

export const getConnection = (url)=>{
    mongoose.connect(url).then(()=>{
        console.log('Database Connected');
        
    }).catch(err=>{
        console.log(`There is ${err}`);
        
    })
}