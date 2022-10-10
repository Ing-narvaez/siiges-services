const { Model, DataTypes, Sequelize } = require('sequelize');

const HIGIENE_TABLE = 'hiegienes';

const HigieneSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    nombre: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        defaultValue: null,
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at',
        defaultValue: null,
      },
};

class Higiene extends Model {
    static associate(models) {}
  
    static config(sequelize) {
      return {
        sequelize,
        tableName: HIGIENE_TABLE,
        modelName: 'Higiene',
        timestamps: false,
      };
    }
  }

  module.exports = { HIGIENE_TABLE, HigieneSchema, Higiene };