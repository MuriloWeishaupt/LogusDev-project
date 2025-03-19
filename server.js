import express from 'express'
import router from './routers/clients.js';

const app = express();
const PORT = 3333

app.use(express.json())
app.use(router)

app.listen(PORT, (error) => {
    if (error) {
        console.log("Algo deu errado");
        return
    }

    console.log(`Tá rodando, na porta ${PORT}`)
})

