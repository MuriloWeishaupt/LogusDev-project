import { DataTypes } from "sequelize";
import Sequelize from "../database/conexao_database.js";

const Chamado = Sequelize.define("chamado", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    latitude_inicial: {
        type: DataTypes.DECIMAL(10, 8),
        allowNull: false,
    },

    longitude_inicial: {
        type: DataTypes.DECIMAL(11, 8),
        allowNull: false,
    },

    latitude_final: {
        type: DataTypes.DECIMAL(10, 8),
        allowNull: false,
    },

    longitude_final: {
        type: DataTypes.DECIMAL(11, 8),
        allowNull: false,
    },

    status_chamado: {
        type: DataTypes.ENUM("AGUARDANDO", "EM ANDAMENTO", "CANCELADO", "CONCLUÍDO"),
    },

    descricao: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },

    requisitado_em: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.NOW
        
    },

    completado_em: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },


},  {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
})

export default Chamado