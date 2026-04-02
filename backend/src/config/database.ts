import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "flash-map-db",
  "owenglahn",
  "Cosmosis7",
  {
    host: "localhost",
    dialect: "postgres",
    port: 5432,
    logging: false
  }
);

export default sequelize;