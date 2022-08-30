const { Model, DataTypes, Sequelize } = require('sequelize');
const { ALUMNO_TABLE } = require('./alumno');

const ALUMNO_GRUPO_TABLE = 'alumnos_grupos';

const AlumnoGrupoSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  alumnoId: {
    field: 'alumno_id',
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    references: {
      model: ALUMNO_TABLE,
      key: 'id',
    },
  },
  grupoId: {
    field: 'grupo_id',
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  periodoFechaInicio: {
    field: 'periodo_fecha_inicio',
    allowNull: false,
    type: DataTypes.DATE,
  },
  periodoFechaFin: {
    field: 'periodoFechaFin',
    allowNull: false,
    type: DataTypes.DATE,
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

class AlumnoGrupo extends Model {
  static associate(models) {
    this.belongsTo(models.Alumno, { as: 'alumno' });
    this.belongsTo(models.Grupo, { as: 'grupo' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ALUMNO_GRUPO_TABLE,
      modelName: 'AlumnoGrupo',
      timestamps: false,
    };
  }
}

module.exports = { ALUMNO_GRUPO_TABLE, AlumnoGrupoSchema, AlumnoGrupo };
