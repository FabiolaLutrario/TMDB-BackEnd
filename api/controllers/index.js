const express = require("express");
const router = express.Router();
const users = require("../routes/users");
const films = require("../routes/films");

router.use("/users", users);
router.use("/films", films);

module.exports = router;
