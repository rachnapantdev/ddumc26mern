import express from 'express'
const app = express();
const port = 9000;

// Routing 
app.get("/", (req, res) => {
    res.send(`<h1> This is first page of express </h1>`)
})

app.get("/about", (req, res) => {
    res.status(200)
    res.send(`<h1> This is express about page !! </h1>`)
})
app.get("/contact", (req, res) => {
    res.status(200).send({
        fname:"Pari",
        lname:"Goel",
        email:"pari@gmail.com",
        phone:9898898989
    })
})

app.listen(port, () => {
    console.log(`listening at localhost:${port}`)
})

