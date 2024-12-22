const express = require("express");
const checkAuth = require("./server/middlewares/checkAuth");

const app = express();

// Middleware pour parser le corps des requêtes
app.use(express.json());

// Route publique
app.get("/", (request, response, next) => {
  response.send("Hello world !!");
});

// Sécurité
app.use(require("./server/routes/security"));

// Routes pour les cinémas
app.use("/cinemas", require("./server/routes/new_cinema")); // Intégration du routeur cinéma

// Routes pour les films
app.use("/films", require("./server/routes/film"));

// Routes for events
app.use("/events",require("./server/routes/event"));

// Routes for reviews
app.use("/reviews",require("./server/routes/review"));

// Routes pour les utilisateurs (avec protection spécifique si nécessaire)
app.use("/users", checkAuth, require("./server/routes/users"));

// Gestion des erreurs
app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

// Démarrage du serveur
app.listen(3000, () => console.log("Server listening on port 3000"));
const sequelize = require("./server/models/db");

sequelize
  .authenticate()
  .then(() => console.log("Database connected successfully"))
  .catch((error) => console.error("Unable to connect to the database:", error));

  module.exports = app; 