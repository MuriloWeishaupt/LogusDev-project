import express from 'express'
import { criarCliente, atualizaCliente, deletaCliente, buscaCliente, buscaClientePorId, loginCliente } from '../controllers/ClienteController.js';
import { verifyJWT } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', verifyJWT, buscaCliente);
router.get('/:id', buscaClientePorId);
router.post('/', criarCliente);
router.put('/:id', atualizaCliente);
router.delete('/:id', deletaCliente);
router.post('/login', loginCliente);


export default router


