const res = require('express/lib/response.js');
const { sequelize, coordinates } = require('../models/index.js');

buscarId = async () => {
  const id = await sequelize.query(
    `SELECT id from coordinates order by id desc limit 1`,
  );
  return id[0][0].id;
};

exports.mostrarPontos = async () => {
  const consulta = await sequelize.query(
    "select type,string_to_array(concat(long,',',lat),',') as coordinates from coordinates;",
  );
  return consulta[0];
};
exports.criarPontos = async (type, long, lat) => {
  var id = await buscarId();
  if (isNaN(id)) {
    id = 1;
  } else {
    id = id + 1;
  }
  const resposta = await coordinates.create({
    id: id,
    type: type,
    long: long,
    lat: lat,
  });
  return resposta;
};

// try{
//   const data = await sequelize.query("select type,string_to_array(concat(long,',',lat),',') as coordinates from coordinates;")
//   res.send(data[0])
// }
// catch(e){
//   res.status(500).send({
//     message: e.message || "Ocorreu algum erro ao trazer os dados.",
//   });
// }
