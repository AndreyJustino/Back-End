import { DataTypes } from 'sequelize';
import { database } from '../database/config.js';

export const Hotels = database.define('Hotels', {
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
  placeId: {
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
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  cnpj: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
}, {
  tableName: 'Hotels', // Nome exato da tabela no banco de dados
  freezeTableName: true, // Não pluraliza o nome da tabela
  timestamps: true, // Inclui automaticamente createdAt e updatedAt
});