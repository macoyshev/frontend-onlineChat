const http = require('http');
const fs = require('fs');

const PORT = 3000

http.createServer((req, res) => {
    console.log("Server started on port " + PORT);
    fs.readFile("index.html", function (err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(PORT);


