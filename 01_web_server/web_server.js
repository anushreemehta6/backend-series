const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res)=>{
    if (req.url == '/') {
        res.statusCode =200;
        res.setHeader('content-type','text/plain');
        res.end("Hello potterhead");
        
    }
    else if (req.url == '/house') {
        res.statusCode =200;
        res.setHeader('content-type','text/plain');
        res.end("Which house do you belong to");
    }
    else{
        res.statusCode =404;
        res.setHeader('content-type','text/plain');
        res.end("404 : not found");
    }
})

server.listen(port , hostname, ()=>{
    console.log(`server is running at http://${hostname}:${port}`);
})