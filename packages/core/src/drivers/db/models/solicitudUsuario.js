const { Model, DataTypes, Sequelize } = require('sequelize');
const { SOLICITUD_TABLE } = require('./Solicitud');
const { USUARIO_TABLE } = require('./Usuario');

const SOLICITUD_USUARIO_TABLE = 'solicitudes_usuarios';

const SolicitudUsuarioSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  
  SolicitudId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'solicitud_id',
    references: {
      model: SOLICITUD_TABLE,
      key: 'id',
    },
  },

  UsuarioId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'usuario_id',
    references: {
      model: USUARIO_TABLE,
      key: 'id',
    },
  },

  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    allowNull: true,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: null,
  },
  deletedAt: {
    allowNull: true,
    type: DataTypes.DATE,
    field: 'deleted_at',
    defaultValue: null,
  },
};

class SolicitudUsuario extends Model {
  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: SOLICITUD_USUARIO_TABLE,
      modelName: 'SolicitudUsuario',
      timestamps: false,
    };
  }
}

module.exports = { SOLICITUD_USUARIO_TABLE, SolicitudUsuarioSchema, SolicitudUsuario };