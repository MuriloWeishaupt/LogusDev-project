import { Sequelize } from "sequelize";

const sequelize = new Sequelize('tcc', 'root', 'rootpassword', {
  host: 'localhost',
  dialect: "mysql",
});

export default sequelize;
