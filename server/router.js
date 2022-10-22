const express = require('express')
const co = require('../sequelize/controllers/coordinates_controllers.js')

const routes = express.Router();
routes.get("/", (req, res) => {
  return res.json({ message: 'Servidor funcionando (router)'});
});


routes.get("/pontos/all", co.findAll);
routes.post("/pontos/create",co.addPonto);


module.exports = { routes };