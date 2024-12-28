function sayHello(name) {
    console.log(`Hello ${name}`);
}
module.exports=sayHello
exports.sayHello = (name) =>{
    console.log(`Hello ${name}`);
}
module.exports={
    log:sayHello
}