const express = require('express')
const router = express.Router()

router.get("/", (request, response) => {
  response.send("Information route for the users");
});

router.get("/:userId", (request, response) => {
  response.send("You are accessing information about the user " + request.params.userId);
});

module.exports = router;