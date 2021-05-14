const express = require('express');
const app = express();

const mustache = require('mustache-express');
const moment = require('moment');
app.set('views', `${__dirname}/views`);
app.set('view engine', 'mustache');
app.engine('mustache', mustache());

app.get("/", (request, response) => {
  response.render('test', {
    name: 'Luciano',
    dayOfWeek: moment().format('dddd')
  });
});

app.listen(8080, () => {
    console.log("Server is listening...");
});