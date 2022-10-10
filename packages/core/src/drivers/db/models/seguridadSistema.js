const { Model, DataTypes, Sequelize } = require('sequelize');

const SEGURIDAD_SISTEMA_TABLE = 'seguridad_sistemas';

const SeguridadSistemaSchema = {
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

class SeguridadSistema extends Model {
    static associate(models) {}
  
    static config(sequelize) {
      return {
        sequelize,
        tableName: SEGURIDAD_SISTEMA_TABLE,
        modelName: 'SeguridadSistema',
        timestamps: false,
      };
    }
  }

  module.exports = { SEGURIDAD_SISTEMA_TABLE, SeguridadSistemaSchema, SeguridadSistema };