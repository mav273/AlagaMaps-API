const express = require('express')
var bodyParser = require('body-parser')
const co = require('../sequelize/controllers/coordinates_controllers.js')

const routes = express.Router();
routes.get("/", (req, res) => {
  return res.json({ message: 'Servidor funcionando (router)'});
});

var jsonParser = bodyParser.json()

routes.get("/pontos/all", co.findAll);
routes.post("/pontos/create",co.addPonto);


module.exports = { routes };