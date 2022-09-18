import createServer from '@tomphttp/bare-server-node';
import http from 'http';
import { existsSync, readFile } from 'node:fs';
import url, {fileURLToPath} from 'node:url';
const bare =  createServer('/bare/');
const server = http.createServer();
import path from 'node:path';

function isPathFileAvaliable(str) {
	return str.substring(str.lastIndexOf('.')).includes('.');
}

const _dirname = path.dirname(fileURLToPath(import.meta.url));

server.on('request', (req, res) => {
  if (bare.shouldRoute(req)) {
		bare.routeRequest(req, res);
	} else {
		var requestp = url.parse(req.url).pathname;
		var reqstat = _dirname + "/static" + requestp;
		var ip = '"not avaliable"';
		if (existsSync(reqstat) && requestp.split('').pop() != "/" && (isPathFileAvaliable(reqstat) == true)) {
			res.writeHead(200);
			readFile(reqstat, function read(err, data) {
    		if (err) {
        	console.error(err);
    		}
    		res.end(data);
				console.log("Request on static resources for " + requestp + " at IP " + ip);
			});
			return;
		} else if (isPathFileAvaliable(reqstat) == false && existsSync(reqstat + "/index.html") && existsSync(reqstat)) {
			res.writeHead(200);
			readFile(reqstat + "/index.html", function read(err, data) {
    		if (err) {
        	console.error(err);
    		}
    		res.end(data);
				console.log("Request on static resources for " + requestp + " at IP " + ip);
			});
			return;
		} else if (existsSync(reqstat)) {
			res.writeHead(200);
			readFile(reqstat, function read(err, data) {
    		if (err) {
        	console.error(err);
    		}
    		res.end(data);
				console.log("Request on static resources for " + requestp + " at IP " + ip);
			});
		} else {
			res.writeHead(200);
    	res.end("We are sorry, but we cannot process your request at this time.");
			return false;
		}
	}
});

server.on('upgrade', (req, socket, head) => {
	if (bare.shouldRoute(req, socket, head)) {
		bare.routeUpgrade(req, socket, head);
	}else{
		socket.end();
	}
});

let port = process.env.PORT || 8080;

server.listen({
	port: port,
});

console.log("Service is hosted at http://localhost:" + port)
