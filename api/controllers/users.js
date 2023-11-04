const { generateToken } = require("../config/tokens");
const { validateAuth } = require("../config/auth");
const User = require("../models/User");

class UsersController {
  static register(req, res) {
    const { name, last_name, email, password } = req.body;

    if (!name || !last_name || !email || !password) {
      return res
        .status(400)
        .send({ error: "Todos los campos son obligatorios" });
    }

    User.create(req.body).then((user) => {
      res.status(201).send(user);
    });
  }

  static login(req, res) {
    const { email, password } = req.body;

    User.findOne({ where: { email } }).then((user) => {
      if (!user) return res.sendStatus(401);
      user.validatePassword(password).then((isValid) => {
        if (!isValid) return res.sendStatus(401);

        const payload = {
          id: user.id,
          email: user.email,
          name: user.name,
          last_name: user.last_name,
        };

        const token = generateToken(payload);

        res.cookie("token", token);

        res.send(payload);
      });
    });
  }

  static validateAuthUser(req, res) {
    validateAuth(req, res, () => {
      res.send(req.user);
    });
  }

  static logout(req, res) {
    res.clearCookie("token");
    res.sendStatus(204);
  }
}
module.exports = UsersController;
