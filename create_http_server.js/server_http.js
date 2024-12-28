const http = require("http");
const fs = require("node:fs");

const homePage = fs.readFileSync("./views/index.html", "utf-8");
const stylePage = fs.readFileSync("./views/style.css", "utf-8");

const server = http.createServer((req, res) => {
    const { url } = req;  //>>Destructuring
    if (url === "/") {
        res.write(homePage);
    } else if (url === "/about") {
        res.write("Welcome to our About Page");
    } else if (url === "/style.css") {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.write(stylePage);
    } else {
        res.write(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `);
    }

    res.end();
});

server.listen(4000, "localhost", () => {
    console.log("Server is running on port 4000" );
})

