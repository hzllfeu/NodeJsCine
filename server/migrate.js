const connection = require("./models/db");
require("./models/user");
require("./models/event");
require("./models/film");
require("./models/reserv");

connection
  .sync({
    alter: true,
  })
  .then(() => console.log("Database synced"))
  .then(() => connection.close()); 
