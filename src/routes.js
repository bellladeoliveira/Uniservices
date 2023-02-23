const express = require('express');
const router = express.Router();

const FornecedorController = require('./controllers/FornecedorController');
const ServicoController = require('./controllers/ServicoController');

// rota de todos os fornecedores
router.get('/fornecedores', FornecedorController.buscarTodos);
// rota para um fornecedor específico via id
router.get('/fornecedores/:id', FornecedorController.buscarUm);
// rota para inserir novo fornecedor
router.post('/fornecedores', FornecedorController.inserir);
// rota para alterar fornecedor
router.put('/fornecedores/:id', FornecedorController.alterar);
// rota para excluir fornecedor
router.delete('/fornecedores/:id', FornecedorController.excluir);




module.exports = router;