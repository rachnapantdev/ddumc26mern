import http from 'http';
const PORT = 9001;
 http.createServer((req, res)=>{

       if(req.url=="/"){
        res.writeHead(200, {
            "content-type":"text/html"
        })
        res.write(`<h1> Welcome to the Home Page </h1>`);
        res.end()
       }
       else if(req.url=="/about"){
        res.writeHead(200,{
            "content-type":"text/plain"
        })
        res.end(`<h1> WElcome to the About page </h1>`);
       }
       else if(req.url =="/contact"){
        res.writeHead(200,{
            "content-type":"application/json"
        });
        res.end(JSON.stringify({
            fname:"Ritika",
            lname:"Tureha",
            email:"rt@gmail.com",
            contact:9898976787
        }))
       }
       else{
        res.writeHead(404,{
            "content-type":"text/html"
        })
        res.end(`<h1> Page not Found </h1>`)
       }
}).listen(PORT, ()=>{
    console.log(`Server is listening at localhost:${PORT}`);
    
})