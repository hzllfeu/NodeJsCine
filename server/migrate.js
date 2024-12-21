const connection = require("./models/db");
require("./models/user");
require("./models/event");
require("./models/film");
require("./models/reviews");
require("./models/new_cinema");


connection
  .sync({
    alter: true,
  })
  .then(() => console.log("Database synced"))
  .then(() => connection.close()); 
