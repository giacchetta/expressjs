const express = require('express');
const app = express();

const middlewares = require("./middlewares");
app.get("/single", middlewares.singleMiddleware, (request, response) => {
  response.send("Hey there, this is the flow attached to the /single route");
});

app.use(middlewares.multipleMiddleware);
app.get("/implicit", (request, response) => {
  response.send("This flow is related to the /implicit route!");
});

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post("/body", (request, response) => {
  response.send("The body is: " + JSON.stringify(request.body));
});

app.listen(8080, () => {
    console.log("Server is listening...");
});