import express from 'express'
import clienteRoutes from './routers/clientesRoutes.js';
import guincheiroRoutes from './routers/guincheirosRoutes.js'

const app = express();
const PORT = 3333;

app.use(express.json())
app.use('/clientes', clienteRoutes);
app.use('/guincheiros', guincheiroRoutes)

app.listen(PORT, (error) => {
    if (error) {
        console.log("Algo deu errado");
        return
    }

    console.log(`Tá rodando, na porta ${PORT}`)
})

