const {
  criarPontos,
  mostrarPontos,
} = require('../sequelize/controllers/coordinates_controllers');

class Coordenada {
  constructor() {
    this.type = 'Point';
  }

  mostrar = async (req, res) => {
    try {
      const pontos = await mostrarPontos();
      res.send(pontos);
    } catch (e) {
      console.error(e);
      res.status(500).send({
        message: e || 'Ocorreu um erro ao criar o ponto.',
      });
    }
  };

  criar = async (req, res) => {
    try {
      const tipo = this.type;
      const longitude = req.body.long;
      const latitute = req.body.lat;

      const consulta = await criarPontos(tipo, longitude, latitute);

      res.json(consulta);
    } catch (e) {
      console.error(e);
      res.status(500).send({
        message: e || 'Ocorreu um erro ao criar o ponto.',
      });
    }
  };
}
module.exports = Coordenada;
