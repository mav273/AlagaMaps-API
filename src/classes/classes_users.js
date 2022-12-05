const {
  criarUsuarios,
  buscarUsuario,
} = require('../sequelize/controllers/users_controllers');

const bcrypt = require('bcrypt');

async function hashPassword(string) {
  try {
    const salt = await bcrypt.genSalt(4, 'a');
    const hash = await bcrypt.hash(string, salt);
    return hash;
  } catch (e) {
    console.log(e);
  }
}
async function comparePassword(string, hash) {
  try {
    const compare = await bcrypt.compare(string, hash);
    return compare;
  } catch (e) {
    console.log(e);
  }
}

class Usuario {
  constructor() {}

  login = async (req, res) => {
    try {
      const user = await buscarUsuario(req.body.email);
      if (typeof user == 'undefined') {
        throw 'Email não cadastrado';
      }

      const compare = await comparePassword(req.body.pwd, user.password);
      if (compare != true) {
        throw 'Senha incorreta';
      }

      res.status(200).send({ nome: user.full_name, id: user.id });
    } catch (e) {
      console.error(e);
      res.status(500).send({
        message: e || ' Ocorreu um erro ao fazer o login.',
      });
    }
  };

  cadastro = async (req, res) => {
    try {
      const user = await buscarUsuario(req.body.email);
      if (typeof user != 'undefined') {
        throw 'Email já cadastrado';
      }

      const nome = req.body.nome;
      const email = req.body.email;
      const pwd = req.body.pwd;
      const senha = await hashPassword(pwd);

      const consulta = await criarUsuarios(nome, email, senha);
      if (typeof consulta.id == 'number') {
        res.status(200).send({ message: 'Usuário criado' });
      } else {
        res
          .status(500)
          .send({ message: 'Ocorreu um erro ao criar o seu usuário.' });
      }
    } catch (e) {
      console.error(e);
      res.status(500).send({
        message: e || 'Ocorreu um erro ao criar o seu usuário.',
      });
    }
  };
}
module.exports = Usuario;
