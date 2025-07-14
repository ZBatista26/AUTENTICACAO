// const { where } = require("sequelize");
const Usuario = require("../models/usuario.model");
const bcrypt = require('bcryptjs')
class UsuarioController {
  static async cadastrar(req, res) {
    try {
      const { matricula, nome, email, senha } = req.body;
      if (!matricula || !nome || !email || !senha) {
        return res
          .status(400)
          .json({ msg: "Todos os campos devem serem preenchidos!" });
      }
      // criptografando a senha
      const senhaCriptografada = await bcrypt.hash(senha, 15);
      await Usuario.create({ nome, matricula, email, senha: senhaCriptografada });
      res.status(200).json({ msg: 'Usuario criado com sucesso' });
    } catch (error) {
      res.status(500).json({ msg: 'Erro do servidor. Tente novamente mais tarde!' })
    }
  }
  static async perfil(req, res) {
    try {
      const { matricula } = req.usuario
      const Usuario = await Usuario.findOne({
        where: { matricula },
        attributes: ['nome', 'email', 'matricula']
      });

      if (!Usuario) {
        return res.status(401).json({ msg: "Não existe Usuario cadastrado!" });
      }
      res.status(200).json(Usuario);
    } catch (error) {
      res.status(500).json({ msg: 'Erro do servidor. Tente novamente mais tarde!' })
    }
  }
}

module.exports = UsuarioController