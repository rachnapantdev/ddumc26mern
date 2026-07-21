import express from 'express';
const app =  express();

app.get("/",(req, res)=>{
    res.send('Main Page ')
})

// app.get("/:id",(req,res)=>{
//     console.log(req.params);
    
//     res.send(`Main page with id : ${req.params.id} `)
// })
app.get("/contact/:name",(req, res)=>{
    res.send(`Data of ${req.params.name}`)
})

app.get("/product",(req, res)=>{
    console.log(req.query);
    const {color, price} =req.query;

    res.status(200).send(`Query Executed with color :  ${color} and price : ${price}`)
    
})

app.listen(9000,()=>{
    console.log(`Server is listening at localhost:9000`);
    
})