// const fs = require('fs');

import fs from 'fs'
// const msg = "Working on file again............";

// fs.writeFile("file_info/first.txt", msg, (data, err) => {
//     if (err) {
//         console.log("There is some error");
//     }
//     else {
//         console.log("Data Saved !!");

//     }
// });

// fs.appendFile('file_info/first.txt', "This is another Message",(data, err)=>{
//     if(!err) console.log('DAta updated ');
//     else console.log('There is some error');
    
// })


// Read data from file 

fs.readFile('file_info/first.txt','utf-8',(data, err)=>{
    if(!err){ console.log(data);
    }
    else { console.log(err);
     }
})

// deleted File 
fs.unlink("file_info/first.docx",(err)=>{
    if(err) console.log('There is some error', err);
    else console.log('File deleted ');
    
})