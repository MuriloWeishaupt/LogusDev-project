import express from 'express';
import { criarGuincheiro, atualizaGuincheiro, deletaGuincheiro, buscaGuincheiro, buscaGuincheiroPorId, loginGuincheiro } from "../controllers/GuincheiroController.js";

const router = express.Router();

router.get('/', buscaGuincheiro);
router.get('/:id', buscaGuincheiroPorId);
router.post('/', criarGuincheiro);
router.put('/:id', atualizaGuincheiro);
router.delete('/:id', deletaGuincheiro);
router.post('/login', loginGuincheiro);

export default router