const http = require("http");
const EventEmitter = require('events');
const PORT = process.env.PORT || 8080;

const emitter = new EventEmitter;

class Router {
    constructor() {
        this.endpoints = {}
    }

    request(method = "GET", path, handler) {
        if (!this.endpoints[path]) {
             this.endpoints[path] = {}
        }
        const endpoint = this.endpoints[path]

        if (endpoint[method]) {
            throw new Error(`${method} by address ${path} already exists`)
        }

        endpoint[method] = handler
    }
}

const server = http.createServer((req, res) => {
   res.end(req.url);
});

server.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))