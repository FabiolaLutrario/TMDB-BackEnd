const express = require("express");
const router = express.Router();
//const { User } = require("../db/models");

/* router.get("/", (req, res, next) => {
  User.findAll().then((users) => res.send(users));
});

router.post("/", (req, res, next) => {
  User.create(req.body).then((user) => res.send(user));
});

router.get("/:id", (req, res, next) => {
  User.findOne({ where: { id: req.params.id }, include: { model: Car } }).then(
    (user) => res.send(user)
  );
}); */

module.exports = router;
