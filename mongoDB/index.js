//Connect to DB and insert data Formally using MongoDB Package
const { MongoClient } = require('mongodb');
// Connection URL
const url = 'mongodb+srv://alielmohammady:alielmohammady@learn-mongo-db.8hqsd.mongodb.net/?retryWrites=true&w=majority&appName=learn-mongo-db';
const client = new MongoClient(url);

// "Data",base Name
const dbName = 'AliDB';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('courses');
    await collection.insertOne({name:'vueJs',price:22});
    await collection.insertMany([
        {name:'NodeJs',price:22},
        {name:'Odoo',price:22},
    ])
    const data = await collection.find().toArray();

    console.log("data",data);

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());