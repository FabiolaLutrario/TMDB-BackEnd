const express = require("express");
const router = express.Router();
const users = require("../routes/users");
const films = require("../routes/films");
const favorites = require("../routes/favorites");

router.use("/users", users);
router.use("/films", films);
router.use("/favorites", favorites);

module.exports = router;
