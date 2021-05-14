const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", (request, response) => {
      response.send("Hello World! \n");
    });

app.listen(8080, () => {
      console.log("Server is listening...");
    });
