const express = require('express');
const app = express();
const router = require("./router");

app.get("/", (request, response) => {
  response.send("GET method on the / path");
});

app.post("/login/:userId", (request, response) => {
  response.json({'id': request.params.userId});
});

app.all("/all", (request, response) => {
  response.send("Flow that handles all the HTTP requests made on the /all path");
});

app.listen(8080, () => {
    console.log("Server is listening...");
});

app.use("/users", router);