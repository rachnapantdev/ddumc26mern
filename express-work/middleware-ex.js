import express from 'express'
const app =  express();

app.use((req,res, next)=>{
    console.log('First Middleware executed !!');
    next();
})

app.use((req, res, next)=>{
    console.log(`Middleware part 2`);
    next();
})

app.get("/", (req, res)=>{
    res.send('Working ....')
})

app.listen(9000);