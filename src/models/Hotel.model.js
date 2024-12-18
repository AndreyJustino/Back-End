import { DataTypes } from "sequelize";
import { database } from "../database/config.js";

const Hotel = database.define(
  "hotels",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    stars: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    longitude: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    district: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    placeid: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    thumb: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    images: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    amenities: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    pois: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    reviews: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    createdat: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedat: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    cnpj: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export { Hotel };
