import { Router } from "express";

const router = Router();

router.get('/clients', (req, res) => {
    res.send("Listagem de clientes")
})

router.post('/clients', (req, res) => {
    res.send("Criação de Clientes")
})

router.put('/clients/:id', (req, res) => {
    const { id } = req.params
    res.send(`Atualização do cliente ${id}`)
})

router.delete('/clients/:id', (req, res) => {
    const { id } = req.params
    res.send(`Deletando cliente ${id}`)
})


export default router
