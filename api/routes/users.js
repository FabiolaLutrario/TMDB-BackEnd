const express = require("express");
const UsersController = require("../controllers/users");
const router = express.Router();

router.post("/register", UsersController.register);
router.post("/login", UsersController.login);
router.get("/me", UsersController.validateAuthUser);
router.post("/logout", UsersController.logout);

module.exports = router;
