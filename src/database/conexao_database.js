import { Sequelize } from "sequelize";

const sequelize = new Sequelize('tcc', 'root', 'weishaupt', {
  host: 'localhost',
  dialect: "mysql",
});

export default sequelize;
