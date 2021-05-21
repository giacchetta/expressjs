const express = require('express');
const middlewares = require("./middlewares");
const mustache = require('mustache-express');

const app = express();

app.set('views', `${__dirname}/views`);
app.set('view engine', 'mustache');
app.engine('mustache', mustache());

app.get("/", middlewares.singleMiddleware, (request, response) => {
    });

app.listen(8080, () => {
    console.log("Server is listening...");
});