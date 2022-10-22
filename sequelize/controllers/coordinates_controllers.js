const res = require('express/lib/response.js');
const { sequelize,coordinates } = require ('../models/index.js')

// async function f(){
//   const d = await sequelize.query("select type,string_to_array(concat(long,',',lat),',') as coordinates from coordinates;")
//   console.log(d[0])
// }
// f()
exports.findAll = (req, res) => {
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
exports.create = (req, res) => {

  // Criar o usuário
  const coordinate = {
    type: req.body.type,
    long: req.body.long,
    lat: req.body.lat
  };
  // Salvar usuário no database
  coordinates
    .create(coordinate)
    .then((data) => {
      res.send(data);
       message: res.send("enviado")
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocorreu um erro ao criar o usuário.",
      });
    });
};

exports.addPonto = (req, res) => {
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