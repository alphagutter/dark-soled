import { Sequelize } from "sequelize";

const sequelize = new Sequelize('dark_souls_1', 'alpha', 'alpha', {
    host: 'localhost',
    dialect: 'postgres' 

  });

  export default sequelize;