const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const express = require('express')
const { routes } = require('./router.js')
const app = express()
const db = require("../sequelize/models");

app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));
db.sequelize.sync()
  .then(() => {
    console.log(`Database conectado: ${process.env.DB_NAME}`);
  })
  .catch((err) => {
    console.log("Falha na conexão: " + err.message);
  });


app.use(express.json());
app.use(routes);