const http = require("http");

const PORT = process.env.PORT || 8080

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'application/json'
    })
    if (req.url === '/users') {
        return res.end(JSON.stringify([{
            id:1, name: "Yehor"
        }]))
    }
    if (req.url === '/posts') {
        res.end('POSTS')
    }
});

server.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))