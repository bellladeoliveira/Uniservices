const express = require('express');
const router = express.Router();

const FornecedorController = require('./controllers/FornecedorController');
const ServicoController = require('./controllers/ServicoController');
const produtoscontroller = require('./controllers/Produtoscontroller');

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

// rota de todos os serviços
router.get('/servicos', ServicoController.buscarTodos);
// rota para um serviço específico via id
router.get('/servicos/:id', ServicoController.buscarUm);
// rota para inserir novo serviço
router.post('/servicos', ServicoController.inserir);
// rota para alterar serviço
router.put('/servicos/:id', ServicoController.alterar);
// rota para excluir serviço
router.delete('/servicos/:id', ServicoController.excluir);

// rota de todos os produtos
router.get('/produtos', produtoscontroller.buscarTodos);
// rota para produtos específico via id
router.get('/produtos/:id', produtoscontroller.buscarUm);
// rota para inserir novo Produtos
router.post('/produtos', produtos.inserir);
// rota para alterar Produtos
router.put('/produto/:id', produtos.alterar);
// rota para excluir Produtos
router.delete('/produto/:id', produtos.excluir);


module.exports = router;