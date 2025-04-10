import { Model, DataTypes } from "sequelize";
import Sequelize from "../database/conexao_database.js";

const Cliente = Sequelize.define("cliente", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    nome: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    email: {
        type: DataTypes.STRING(70),
        allowNull: false
    },

    cpf: {
        type: DataTypes.CHAR(11),
        allowNull: false
    },

    senha: {
        type: DataTypes.STRING(30),
        allowNull: false
    },

    telefone: {
        type: DataTypes.CHAR(11),
        allowNull: false
    },

    cnh_num: {
        type: DataTypes.STRING(11),
        allowNullNul: false
    },
   

},  { timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

export default Cliente





