const jwt = require("jsonwebtoken");
const { SECRET } = require("./envs");

const generateToken = (payload, duration) => {
  const token = jwt.sign({ user: payload }, SECRET, {
    expiresIn: `${duration}`,
  });
  return token;
};

const validateToken = (token) => {
  return jwt.verify(token, SECRET);
};

module.exports = { generateToken, validateToken };
