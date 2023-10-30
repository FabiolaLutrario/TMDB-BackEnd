const Sequelize = require("sequelize");
const config = require("./envs");

const db = new Sequelize(config.DB_HOST, "postgres", "1234", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;
