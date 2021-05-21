const express = require('express');
// const middlewares = require("./middlewares");
const mustache = require('mustache-express');
const router = require("./router");

const app = express();

app.set('views', `${__dirname}/views`);
app.set('view engine', 'mustache');
app.engine('mustache', mustache());

app.use("/router",router);

app.get("/basic", (request, response) => {
  response.send("Hello, World");
});

app.get("/template", (request, response) => {
      response.render('test', {
        name: "Luciano"
      });
});

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post("/body", (request, response) => {
  response.send("The body is: " + JSON.stringify(request.body));
});

app.listen(8080, () => {
    console.log("Server is listening...");
});