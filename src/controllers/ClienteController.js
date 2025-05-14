import Cliente from '../models/Cliente.js';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt';
import dotenv from "dotenv";    

dotenv.config();

const SECRET = process.env.JWT_SECRET

export const criarCliente = async (req, res) => {
    try {
        const { nome, email, senha, cpf, telefone, cnh_num } = req.body;
        const senhaHash = await bcrypt.hash(senha, 10);
        const novoCliente = await Cliente.create({ nome, email, senha: senhaHash, cpf, telefone, cnh_num });
        const { senha:_, ...clienteSemSenha} = novoCliente.dataValues; 
        res.status(201).json(clienteSemSenha);
    } catch (error) {
        res.status(400).json({ error: error.message });   
    }
};

export const buscaCliente = async (req, res) => {
    try {
        const clientes = await Cliente.findAll({
            attributes: {exclude: ['senha']}
        });
        
        console.log(`${req.user?.nome || "User desconhecido"} fez essa busca de clientes` )
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const buscaClientePorId = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id, {
            attributes: {exclude: ['senha']}
        }); 
        

        if (!cliente) return res.status(404).json({ error: "Cliente não encontrado" });

        else res.status(200).json(cliente);
    
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const atualizaCliente = async (req, res) => {
    try {

        const { nome, email, senha, cpf, telefone, cnh_num } = req.body;
        const cliente = await Cliente.findByPk(req.params.id); 
        
        if (!cliente) return res.status(404).json({ error: "Cliente não encontrado" });

        let senhaHash = cliente.senha;
        if (senha) { senhaHash = await bcrypt.hash(senha, 10)}

        await cliente.update({ nome, email, senha: senhaHash, cpf, telefone, cnh_num });
        res.status(200).json(cliente);

        

       
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deletaCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);
        if (!cliente) res.status(404).json({ error: "Cliente não encontrado!" }); 

        else {
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

        if (!email || !senha) return res.status(400).json({error: "Preencha todos os campos!"})

        if (!cliente) return res.status(404).json({error: "Credenciais inválidas!"})

        const comparaSenha = await bcrypt.compare(senha, cliente.senha);

        if (!comparaSenha) return res.status(401).json({error: "Credenciais inválidas!"})

        const token = jwt.sign({userId: cliente.id}, SECRET, { expiresIn: '1h' } )
        return res.json({
            auth: true,
            token,
            cliente: {
                id: cliente.id,
                nome: cliente.nome,
                email: cliente.email,
            }
        });

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
