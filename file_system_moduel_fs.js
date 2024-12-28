// // Blocking code will be executed first  then callback will be executed
// console.log("Before blocking code");
const fs = require("node:fs");
// fs.readFileSync("./text.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
//     console.log("After callback");
// });
// console.log("After blocking code");

// // // Non-blocking code stored in event loop and will be executed later
console.log("Before blocking code");
// fs.readFile(file, options,callback )
// fs.readFile("./text.txt", "utf-8", (err, data) => {   //>>>using utf-8 for text file and avoid Buffer
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
//     console.log("After callback");
// });


//Write file
// fs.writeFile("./user.json", JSON.stringify({id: 1, name: "Ali" }), (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File written successfully");
//     }
// });

//unlink file
// fs.unlink("./user.json", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File deleted successfully");
//     }
// });

//Stream(Readable, Writable) : it is a pipe between read and write to transfer data from one place to another partially
const rstream = fs.createReadStream("./text.txt", "utf-8");
const wstream = fs.createWriteStream("./text2.txt", "utf-8");    

rstream.on("data", (chunk) => {
    console.log("\n===========chunk===========\n");
    wstream.write(chunk);
    console.log("\n===========chunk===========\n");

});

