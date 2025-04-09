import express from 'express'
import { criarCliente, atualizaCliente, deletaCliente, buscaCliente, buscaClientePorId, loginCliente } from '../controllers/ClienteController.js';

const router = express.Router();

router.get('/', buscaCliente);
router.get('/:id', buscaClientePorId);
router.post('/', criarCliente);
router.put('/:id', atualizaCliente);
router.delete('/:id', deletaCliente);
router.post('/login', loginCliente);


export default router


