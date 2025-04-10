import Cliente from '../models/Cliente.js';

export const criarCliente = async (req, res) => {
    try {
        const { nome, email, senha, cpf, telefone, cnh_num } = req.body;
        const novoCliente = await Cliente.create({ nome, email, senha, cpf, telefone, cnh_num });
        res.status(201).json(novoCliente);
    } catch (error) {
        res.status(400).json({ error: error.message });   
    }
};

export const buscaCliente = async (req, res) => {
    try {
        const clientes = await Cliente.findAll(); 
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const buscaClientePorId = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id); 
        if (!cliente) {
            return res.status(404).json({ error: "Cliente não encontrado" });
        } else {
            res.status(200).json(cliente);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const atualizaCliente = async (req, res) => {
    try {
        const { nome, email, senha, cpf, telefone, cnh_num } = req.body;
        const cliente = await Cliente.findByPk(req.params.id); 
        if (!cliente) {
            return res.status(404).json({ error: "Cliente não encontrado" });
        } else {
            await cliente.update({ nome, email, senha, cpf, telefone, cnh_num });
            res.status(200).json(cliente);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deletaCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);
        if (!cliente) {
            res.status(404).json({ error: "Cliente não encontrado!" });
        } else {
            await cliente.destroy();
            res.status(204).send();
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const loginCliente = async (req, res) => {
    try {
        const { email, senha } = req.body;
        
        const cliente = await Cliente.findOne({where: { email }});

        if (!email || !senha) {
            return res.status(400).json({error: "Preencha todos os campos!"})
        }

        if (!cliente || cliente.senha !== senha) {
            return res.status(404).json({error: "Credenciais inválidas!"})
        } 

        res.status(200).json({message: "Login realizado com sucesso!", cliente})
    } catch (error) {

    }
}
