import { DataTypes } from "sequelize";
import { database } from "../database/config.js";

const User = database.define('User', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nome: { type: DataTypes.STRING, allowNull: false }
});

export { User };