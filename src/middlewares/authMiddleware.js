import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const SECRET = "teste"

export const verifyJWT = (req, res, next) => {
    const token = req.headers['x-access-token']
    if (!token) return res.status(401).json({error: "Token não fornecido!"})
        
    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) return res.status(401).json({error: "Este token é inválido ou está expirado!"});

        req.userId = decoded.userId;
        next();
    })
}

export default verifyJWT;