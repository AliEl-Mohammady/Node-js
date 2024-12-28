console.log("Ali El-mohammady")

const os=require("node:os")
console.log(os.uptime())
console.log(os.platform())

const fs=require("node:fs")
console.log(fs.readFileSync("./text.txt","utf-8"))

const sayHello=require("./builtIn_module")
sayHello.log("Ali El-mohammady")

// console.log(require.cache)
delete require.cache[require.resolve("./builtIn_module")]
console.log(require.cache)

