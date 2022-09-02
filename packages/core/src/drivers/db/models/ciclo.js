const { Model, DataTypes, Sequelize } = require('sequelize');

const CICLO_TABLE = 'ciclos';

const cicloSchema = {
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

class Ciclo extends Model {
    //static associate(models) {}
  
    static config(sequelize) {
      return {
        sequelize,
        tableName: CICLO_TABLE,
        modelName: 'Ciclo',
        timestamps: false,
      };
    }
  }

  module.exports = { CICLO_TABLE, cicloSchema, Ciclo };