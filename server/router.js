require('dotenv').config({ path: __dirname + '/../.env' });
require('dotenv').config();
const express = require('express');
const Coordenadas = require('../classes/classe_coordenada.js');

const routes = express.Router();
routes.get('/', (req, res) => {
  return res.json({
    message: `Servidor funcionando. Database conectado: ${process.env.DB_NAME}`,
  });
});

var coordenada = new Coordenadas();

routes.get('/api/pontos/todos', coordenada.mostrar);
routes.post('/api/pontos/criar', coordenada.criar);

module.exports = { routes };
