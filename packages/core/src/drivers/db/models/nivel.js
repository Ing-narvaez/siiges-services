const { Model, DataTypes, Sequelize } = require('sequelize');

const NIVEL_TABLE = 'niveles';

const nivelSchema = {
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

class Nivel extends Model {
    static associate(models) {}
  
    static config(sequelize) {
      return {
        sequelize,
        tableName: NIVEL_TABLE,
        modelName: 'Nivel',
        timestamps: false,
      };
    }
  }

  module.exports = { NIVEL_TABLE, nivelSchema, Nivel };