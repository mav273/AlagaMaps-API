require('dotenv').config({ path: __dirname + '/../.env' });
require('dotenv').config();
const express = require('express');
const Usuario = require('../classes/classes_users.js');
const Coordenadas = require('../classes/classe_coordenada.js');

const routes = express.Router();
routes.get('/', (req, res) => {
  return res.json({
    message: `Servidor funcionando. Database conectado: ${process.env.DB_NAME}`,
  });
});

var coordenada = new Coordenadas();
var usuario = new Usuario()

routes.get('/api/pontos/todos', coordenada.mostrar);
routes.post('/api/pontos/criar', coordenada.criar);
routes.post('/api/usuarios/checar', usuario.login);
routes.post('/api/usuarios/criar', usuario.cadastro   );

module.exports = { routes };
