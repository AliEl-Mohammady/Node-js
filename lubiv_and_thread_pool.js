const crypto=require("crypto");

process.env.UV_THREADPOOL_SIZE=10  //>>>> change the thread pool size

const start=performance.now();
// crypto.pbkdf2Sync("password", "salt", 100000, 64, "sha512") .//>>Cpu tasks
// console.log(performance.now() - start);

// crypto.pbkdf2Sync("password", "salt", 100000, 64, "sha512")
// console.log(performance.now() - start);

// crypto.pbkdf2("password", "salt", 100000, 64, "sha512", () => {
//     console.log(performance.now() - start);
// });

// crypto.pbkdf2("password", "salt", 100000, 64, "sha512", () => {
//     console.log(performance.now() - start);
// });

// crypto.pbkdf2("password", "salt", 100000, 64, "sha512", () => {
//     console.log(performance.now() - start);
// });

// crypto.pbkdf2("password", "salt", 100000, 64, "sha512", () => {
//     console.log(performance.now() - start);
// });


//Network tasks
fetch("https://jsonplaceholder.typicode.com/todos/1").then(res => res.json()).then(data => {
    console.log(data)
    console.log(performance.now() - start);
});