import { hostname } from "os";
import http from "http";

const message = "Hey, it's Grey";
const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(message);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname()}:${port}/`)
});