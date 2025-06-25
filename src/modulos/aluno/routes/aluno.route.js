const express = require('express');
const AlunoController = require('../controllers/aluno.controller')

const router = express.Router()

// rota de cadastro
router.post('/cadastrar', AlunoController.cadastrar);

module.exports = router