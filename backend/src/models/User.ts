import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const User = sequelize.define("user", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  }, 
  password: {
    type: DataTypes.STRING, 
    allowNull: false,
    unique: false
  }
});

export default User;