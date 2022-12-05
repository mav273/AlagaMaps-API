const res = require('express/lib/response.js');
const { sequelize,users } = require('../models/index.js');

buscarUltimoUserId = async () => {
  const id = await sequelize.query(
    `SELECT id from users order by id desc limit 1`,
  );
  return id[0][0].id;
};
buscarEmail = async (email) => {
  const id = await sequelize.query(
    `SELECT email from users where email='${email}'`,
  );
  return id[0][0].email;
};
exports.buscarUsuario = async (email) => {
  try {
    const consulta = await sequelize.query(
      `select id,full_name,email,password from users where email = '${email}';`,
    );
    return consulta[0][0];
  } catch (e) {
    console.log(e);
    return e;
  }
};
exports.criarUsuarios = async (name, email, pwd) => {
  try {
    var hoje = new Date();
    hoje = hoje.getTime() - 60 * 60 * 3;
   
    var id = await buscarUltimoUserId();
    console.log(id)
    if (isNaN (id)) {
      id = 1;
    } else {
      id = id + 1;
    }

    const resposta = await users.create({
      id: id,
      full_name: name,
      email: email,
      password: pwd,
      createdAt: hoje,
      updatedAt: hoje,
    });
    return resposta;
  } catch (e) {
    console.log(e);
    return e;
  }
};
