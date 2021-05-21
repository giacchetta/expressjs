const express = require('express')
const router = express.Router()

router.get("/first", (request, response) => {
  response.send("Information of First Route");
});

router.get("/second", (request, response) => {
  response.send("Information of Second Route");
});

module.exports = router;