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
async function buscarId(){
  const id = await sequelize.query(`SELECT id from coordinates order by id desc limit 1`)
  return id[0][0].id
}

exports.criarPonto = async (req, res) => {
  const id = await buscarId()

  coordinates.create({
    id: id + 1,
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