const express = require("express");
const checkAuth = require("./server/middlewares/checkAuth");

const app = express();

app.get("/", (request, response, next) => {
  response.send("Hello world !!");
});

//app.use(parseBody);
app.use(express.json() /* body-parser lib */);

app.use(require("./server/routes/security"));

// All routes are protected
//app.use(checkAuth);
app.use(require("./server/routes/film"));
app.use(
  /** only user routes are protected **/ /*checkAuth,*/ require("./server/routes/users")
);

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

app.listen(3000, () => console.log("Server listening on port 3000"));
