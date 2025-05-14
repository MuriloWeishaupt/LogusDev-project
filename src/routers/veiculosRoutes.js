import express from 'express';
import { adicionarVeiculo, buscaVeiculo, buscaVeiculoPorId, deletaVeiculo } from '../controllers/VeiculoController.js';

const router = express.Router();

router.get('/', buscaVeiculo);
router.get('/:id', buscaVeiculoPorId);
router.post('/', adicionarVeiculo);
router.delete('/:id', deletaVeiculo);

export default router