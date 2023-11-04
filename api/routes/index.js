const express = require("express");
const router = express.Router();
const users = require("./users");
const films = require("./films");
const favorites = require("./favorites");

router.use("/users", users);
router.use("/films", films);
router.use("/favorites", favorites);

module.exports = router;
