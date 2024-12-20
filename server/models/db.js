const { Sequelize } = require("sequelize");

// Définir l'URL par défaut pour se connecter à la base "cinema"
const defaultDatabaseUrl = "mysql://root:pass@localhost:3306/cinema";

// Utiliser DATABASE_URL depuis les variables d'environnement ou l'URL par défaut
const connection = new Sequelize(
  process.env.DATABASE_URL ?? defaultDatabaseUrl
);

async function testConnection() {
  try {
    console.log("Attempting to authenticate...");
    await connection.authenticate();
    console.log("Connection has been established successfully.");

    console.log("Executing test query...");
    const [results] = await connection.query("SELECT NOW();");
    console.log("Query executed successfully. Current time:", results[0]['NOW()']);
  } catch (error) {
    console.error("An error occurred:", error.message);
  } finally {
    console.log("Closing connection...");
    await connection.close();
    console.log("Connection closed.");
  }
}

testConnection();

module.exports = connection;