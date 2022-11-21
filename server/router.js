const express = require('express')
const co = require('../sequelize/controllers/coordinates_controllers.js')

const routes = express.Router();
routes.get("/", (req, res) => {
  return res.json({ message: 'Servidor funcionando (router)'});
});


routes.get("/api/pontos/todos", co.mostrarTodos);
routes.post("/api/pontos/criar",co.criarPonto);


module.exports = { routes };