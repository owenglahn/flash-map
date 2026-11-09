import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "flash-map-db",
  "owenglahn",
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
    port: 5432,
    logging: false
  }
);

export default sequelize;