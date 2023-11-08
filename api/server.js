require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
//const morgan = require("morgan");
const routes = require("./routes/index");
const db = require("./config/index");
const path = require("path");
const envs = require("./config/envs");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:3000", // URL del frontend
    credentials: true, // Habilita el envio de cookies
  })
);
//app.use(morgan("tiny"));
app.use("/api", routes);

db.sync({ force: false }).then(() => {
  app.listen(envs.PORT, () => {
    console.log(`Server listening at port ${envs.PORT}`);
  });
});
