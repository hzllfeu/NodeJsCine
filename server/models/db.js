const { Sequelize } = require("sequelize");

//const defaultDatabaseUrl = "mysql://username:password@localhost:3306/dbname"; modifier 

const connection = new Sequelize(
  process.env.DATABASE_URL ?? defaultDatabaseUrl
);

connection.authenticate()
  .then(() => {
    console.log("Database is ready");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = connection;  
