const express = require('express');
const UsuarioController = require('../controllers/usuario.controller');
const autenticacaoMiddleware = require('../../../middleware/autenticacao.middleware');
const AutorizacaoMiddleware = require('../../../middleware/autorizacao.middleware');

const router = express.Router()

// rota de cadastro
router.post('/cadastrar', UsuarioController.cadastrar);

// rota de perfil
router.get('/perfil', autenticacaoMiddleware.autenticarToken, UsuarioController.perfil);

//rota de tarefa
router.get('/tarefa', autenticacaoMiddleware.autenticarToken, AutorizacaoMiddleware.autorizar(['professor', 'secretario']) );

module.exports = router