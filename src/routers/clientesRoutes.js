import express from 'express'
import { criarCliente, atualizaCliente, deletaCliente, buscaCliente, buscaClientePorId } from '../controllers/ClienteController.js';

const router = express.Router();

router.get('/', buscaCliente);
router.get('/:id', buscaClientePorId);
router.post('/', criarCliente);
router.put('/', atualizaCliente);
router.delete('/:id', deletaCliente);

export default router


