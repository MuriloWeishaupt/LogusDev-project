import { Model, DataTypes } from "sequelize";
import Sequelize from "../database/conexao_database.js";

const Cliente = Sequelize.define("Cliente", {
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

    pw: {
        type: DataTypes.STRING(30),
        allowNull: false
    },

    telefone: {
        type: DataTypes.CHAR(11),
        allowNull: false
    },

   

   

},  { timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

export default Cliente





