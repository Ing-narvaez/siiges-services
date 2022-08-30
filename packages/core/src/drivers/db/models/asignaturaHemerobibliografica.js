const { Model, DataTypes, Sequelize } = require('sequelize');
const { ASIGNATURA_TABLE } = require('./asignatura');

const ASIGNATURA_HEMEROBIBLIOGRAFICA_TABLE = 'asignatura_hemerobibliografica';

const AsignaturaHemerobibliograficaSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  asignaturaId: {
    field: 'asignatura_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ASIGNATURA_TABLE,
      key: 'id',
    },
  },
  hemerobibliograficaId: {
    field: 'hemerobibliografica_id',
    allowNull: false,
    type: DataTypes.INTEGER,
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

class AsignaturaHemerobibliografica extends Model {
  static associate(models) {
    this.belongsTo(models.Asignatura, { as: 'asignatura' });
    this.belongsTo(models.hemerobibliografica, { as: 'hemerobibliografica' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ASIGNATURA_HEMEROBIBLIOGRAFICA_TABLE,
      modelName: 'ASIGNATURA_HEMEROBIBLIOGRAFICA',
      timestamps: false,
    };
  }
}
module.exports = {
  ASIGNATURA_HEMEROBIBLIOGRAFICA_TABLE,
  AsignaturaHemerobibliograficaSchema,
  AsignaturaHemerobibliografica,
};
