const { generateToken } = require("../config/tokens");
const { validateAuth } = require("../config/auth");
const { validateToken } = require("../config/tokens");
const { transporter } = require("../config/mailer");
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

        const token = generateToken(payload, "1d");

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

  static sendEmail(req, res) {
    const email = req.body.email;

    User.findOne({ where: { email } }).then((user) => {
      if (!user) return res.sendStatus(401);

      //Si el usuario existe va a generar un token
      const payload = {
        id: user.id,
        email: user.email,
        name: user.name,
        last_name: user.last_name,
      };

      const token = generateToken(payload, "10m");
      user.token = token;

      user
        .save()
        .then(() => {
          //Genera el link de recuperación de contraseña y lo envía por correo
          const restorePasswordURL = `http://localhost:3000/restore-password/${user.token}`;
          const info = transporter.sendMail({
            from: '"Recuperación de contraseña 👻" <fabiolalutrario@gmail.com>',
            to: user.email,
            subject: "Recuperación de contraseña ✔",
            html: `<b>Por favor haz click en el siguiente link, o copia el enlace y pegalo en tu navegador para completar el proceso:</b><a href="${restorePasswordURL}">${restorePasswordURL}</a>`,
          });
          info.then(() => {
            res.status(200).send(user.email);
          });
        })
        .catch((error) => {
          res.send("Something went wrong");
          console.error(error);
        });
    });
  }

  static overwritePassword(req, res) {
    const token = req.params.token;
    if (!token) return res.sendStatus(401);

    const { user } = validateToken(token);
    if (!user) return res.sendStatus(401);

    User.findOne({ where: { token } }).then((user) => {
      if (!user) return res.sendStatus(401);

      user.token = null;
      user.password = req.body.password;
      user.save().then(() => {
        res.sendStatus(200);
      });
    });
  }
}
module.exports = UsersController;
