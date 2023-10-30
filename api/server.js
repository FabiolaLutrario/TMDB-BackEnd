const express = require("express");
const app = express();
//const morgan = require("morgan");
const routes = require("./controllers/index");
const db = require("./config/index");
const path = require("path");
const PORT = 5000;
const envs = require("./config/envs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//app.use(morgan("tiny"));

app.use("/api", routes);

db.sync({ force: false }).then(() => {
  app.listen(envs.PORT, () => {
    console.log(`Server listening at port ${envs.PORT}`);
  });
});
