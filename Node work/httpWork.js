import http from 'http';
import fs from 'fs';
const PORT = 3000;
let server = http.createServer((req, res) => {
    // let url = "\n"+req.url+"\n";
    
    let url = `\n ${req.url} is visited on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()} \n`;

    if (req.url == "/") {
        res.write(`<h1> This is first Page </h1>`);
        res.end('Working on Home page ');
    }
    else if (req.url == "/about") {
        res.end('Working on About Page ')
    }
    else {

        res.end('Working of servers');
    }
    fs.appendFile('file_info/log.txt', url, (err) => {
        if (!err) {
            console.log('Log saved');
        } else console.log(err)
    })
})

server.listen(PORT, () => {
    console.log(`Server is listening at localhost:${PORT}`);

})

