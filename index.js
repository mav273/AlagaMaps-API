const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "/.env") });

const cors = require("cors");
const express = require("express");
const { routes } = require("./src/server/router.js");
const app = express();
const db = require("./src/sequelize/models");

app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));
db.sequelize
  .sync()
  .then(() => {
    console.log(`Database conectado: ${process.env.DB_NAME}`);
  })
  .catch((err) => {
    console.log("Falha na conexão: " + err.message);
  });

app.use(cors({
  credentials: true,
  methods: ['GET', 'PUT', 'POST'],
  allowedHeaders: [ 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization']
}));
app.use(express.json());
app.use(routes);
