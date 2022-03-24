const express = require("express");
const initDataBase = require("./db");
const cors = require("cors");
const routes = require("./routes/index.js");

const app = express();
initDataBase();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Accept", "Content-Type", "Authorization"],
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.use("/products", routes);

module.exports = app;
