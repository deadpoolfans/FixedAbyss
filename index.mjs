import Server from 'bare-server-node';
import http from 'http';
import nodeStatic from 'node-static';
import cluster from 'cluster';
import os from 'os';
const numCPUs = os.cpus().length;
import fs from 'fs';
let blockList = 0
fs.readFile("./blocked.txt", "utf8", function(err, data) {
blockList = data.split("\r\n")
});
if(cluster.isMaster){
console.log("Running");
	for(let i = 0; i < numCPUs; i++){
	cluster.fork();
	}
}else{
const bare =  new Server('/bare/', '');
const serve = new nodeStatic.Server('public/');

const server = http.createServer();

server.on('request', (request, response) => {
	
    if (bare.route_request(request, response)) {
      
    if (blockList.includes(request.rawHeaders[request.rawHeaders.indexOf('x-bare-host')+1])) {
    console.log("included")
  
    }else{
        console.log(request)
	    return true;
    }
    }
    serve.serve(request, response);
   
    
});

server.on('upgrade', (req, socket, head) => {
	if(bare.route_upgrade(req, socket, head))return;
	socket.end();
});
server.listen(process.env.PORT || 80, () => {console.log("Abyss running at http://localhost:80")});
}
