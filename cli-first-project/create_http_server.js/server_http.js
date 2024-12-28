const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello World");
    if (req.url === "/") {
        res.end("Welcome to our Home Page");
    } else if (req.url === "/about") {
        res.end("Welcome to our About Page");
    } else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `);
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
})