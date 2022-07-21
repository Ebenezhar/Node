// const os = require('os');
// const path = require('path');

// let platform = os.platform();
// console.log(platform);

// let cpus =  os.cpus();
// console.log(cpus.length);

// let uptime = os.uptime();
// console.log(uptime);

// const fs = require('fs');

// const {add} = require('./calculate.js')

// console.log(path.extname(path.basename(__filename,)));

const fs = require('fs');

// fs.writeFile('message.txt','Code Red',(err) => 
//     {if(err) throw err;
//     console.log("File Create");    
// })

// fs.readFile('./message.txt', (err, data) =>{
//     if(err) throw err;
//     console.log(data.toString());
// })

fs.readdir("../",{withFileTypes: true},(err,files) => {
    if(err) throw err;
    files.forEach((file) =>{
            console.log(file.name,file.isDirectory());
    })
})

