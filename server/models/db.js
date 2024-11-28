/*const { Sequelize } = require("sequelize");

//const defaultDatabaseUrl = "mysql://username:password@localhost:3306/dbname"; modifier 

const connection = new Sequelize(
  process.env.DATABASE_URL ?? defaultDatabaseUrl
);

connection.authenticate().then(() => console.log("Database is ready"));

module.exports = connection;  
*/
const { MongoClient } = require('mongodb');

const defaultDatabaseUrl = "mongodb://admin:root@localhost:27017/cinema"

const uri = process.env.DATABASE_URL ?? defaultDatabaseUrl;

async function connect() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const database = client.db('cinema');
    const collection = database.collection('films');

    const testDocument = {
      titre: "Inception",
      réalisateur: "Christopher Nolan",
      année: 2010,
      genre: "Science-fiction"
    };

    const result = await collection.insertOne(testDocument);
    console.log(`Document inséré avec l'ID : ${result.insertedId}`);
  } catch (err) {
    console.error("Erreur lors de l'insertion du document", err);
  } finally {
    await client.close();
  }
}

connect();

module.exports = { connect };