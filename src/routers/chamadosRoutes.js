import express from 'express';
import { criarChamado, listarChamados, listaChamadoPorId, atualizarStatusChamado, deletarChamado } from '../controllers/ChamadoController.js';

const router = express.Router();

router.post('/', criarChamado);
router.get('/chamados', listarChamados);
router.get('/chamados/:id', listaChamadoPorId);
router.patch('/chamados/:id', atualizarStatusChamado);
router.delete('/chamados/:id', deletarChamado);

export default router