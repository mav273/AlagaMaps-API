const {
  criarPont,
  mostrarPontos,
  buscarId,
} = require('../sequelize/controllers/coordinates_controllers');

class Coordenada {
  constructor() {
    this.id = buscarId();
  }

  mostrar = async (req, res) => {
    try {
      const pontos = await mostrarPontos();
      res.send(pontos);
    } catch (e) {
      console.error(e);
      res.status(500).send({
        message: e.message || 'Ocorreu um erro ao criar o ponto.',
      });
    }
  };

  criar = async (req, res) => {
    try {
      const id = this.id;
      const tipo = req.body.type;
      const longitude = req.body.long;
      const latitute = req.body.lat;

      const consulta = await criarPont(id + 1, tipo, longitude, latitute);

      res.json(consulta);
    } catch (e) {
      console.error(e);
      res.status(500).send({
        message: e.message || 'Ocorreu um erro ao criar o ponto.',
      });
    }
  };
}
module.exports = Coordenada;
