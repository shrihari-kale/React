const http = require("node:http");
const host ="leocahost";
const port = 3000;
const server = http.createServer((req,res)=>{
    const {url, method} = req;
    if(url === "/" && method === "GET"){

        res.end("Hello, welcome to node.js");

    }

    
})
server.listen(port, host, () =>{

    console.log(`Server is running on ${host}:${port}`)
})