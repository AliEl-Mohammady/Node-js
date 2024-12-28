const express = require("express");      //Express js framework to handle http requests web server
const app = express();

app.use(express.static("./views"));

//MiddleWare used to log the requests
const logger=app.use((req, res, next) => {
    console.log("Midlware",req.url);
    next();
})

app.get("/", (req, res) => {
    res.send("Hello World");
})
app.get("/About", (req, res) => {
    res.send("Hello About Page");
})
app.listen(3000, () => console.log("Server is running on port 3000"));