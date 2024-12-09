const { Sequelize } = require("sequelize");

const NAME = process.env.DB_NAME || "cinema";
const USER = process.env.DB_USER || "root";
const PASSWORD = process.env.DB_PASSWORD || "";
const HOST = process.env.DB_HOST || "localhost";
const PORT = process.env.DB_PORT || 3306;

const sequelize = new Sequelize(NAME, USER, PASSWORD, {
  host: HOST,
  port: PORT,
  dialect: "mysql",
  logging: false,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connexion reussie");
  } catch (error) {
    console.error("Erreur:", error);
  }
})();

module.exports = sequelize;