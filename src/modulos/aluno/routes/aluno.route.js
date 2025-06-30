const express = require('express');
const AlunoController = require('../controllers/aluno.controller')
const autenticacaoMiddleware = require('../middleware/aluno.middleware')

const router = express.Router()

// rota de cadastro
router.post('/cadastrar', AlunoController.cadastrar);

// rota de perfil
router.get('/perfil', autenticacaoMiddleware.autenticarToken, AlunoController.perfil);

module.exports = router