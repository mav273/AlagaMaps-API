const res = require('express/lib/response.js');
const { sequelize,coordinates } = require ('../models/index.js')


exports.mostrarTodos = (req, res) => {
  sequelize
    .query("select type,string_to_array(concat(long,',',lat),',') as coordinates from coordinates;")
    .then((data) => {
      res.send(data[0]);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocorreu algum erro ao trazer os dados.",
      });
    }); 
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

exports.criarPonto = (req, res) => {
  coordinates.create({
    type: req.body.type,
    long: req.body.long,
    lat: req.body.lat
  }).then((result) => res.json(result))
  .catch((err) =>{
    res.status(500).send({
      message: err.message || "Ocorreu um erro ao criar o ponto.",
    })
  })
}