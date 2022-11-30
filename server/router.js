require('dotenv').config({ path: __dirname + '/../.env' });
require('dotenv').config();
const express = require('express');
// const co = require('../sequelize/controllers/coordinates_controllers.js');
const Coordenadas = require('../classes/classe_coordenada.js');

const routes = express.Router();
routes.get('/', (req, res) => {
  return res.json({
    message: `Servidor funcionando\nDatabase conectado: ${process.env}`,
  });
});

var coordenada = new Coordenadas();

routes.get('/api/pontos/todos', coordenada.mostrar);
routes.post('/api/pontos/criar', coordenada.criar);

// routes.get('/api/pontos/todos', co.mostrarTodos);
// routes.post('/api/pontos/criar', co.criarPonto);

module.exports = { routes };
