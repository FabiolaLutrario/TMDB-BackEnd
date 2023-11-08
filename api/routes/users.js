const express = require("express");
const UsersController = require("../controllers/users");
const router = express.Router();

router.post("/register", UsersController.register);
router.post("/login", UsersController.login);
router.get("/me", UsersController.validateAuthUser);
router.post("/logout", UsersController.logout);
router.put("/restore-password", UsersController.sendEmail);
router.post("/overwrite-password/:token", UsersController.overwritePassword);

module.exports = router;
