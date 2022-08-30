const { Model, DataTypes, Sequelize } = require('sequelize');

const ASIGNATURA_TABLE = 'asignatura';

const AsignaturaSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  infraestructuraId: {
    field: 'infraestructura_id',
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  docenteId: {
    field: 'docente_id',
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  academia: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  programaId: {
    allowNull: false,
    field: 'programa_id',
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  consecutivo: {
    type: DataTypes.INTEGER,
  },
  area: {
    type: DataTypes.INTEGER,
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  clave: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  seriacion: {
    type: DataTypes.STRING,
  },
  objetivo: {
    type: DataTypes.STRING,
  },
  temas: {
    type: DataTypes.STRING,
  },
  atividades: {
    type: DataTypes.STRING,
  },
  modeloInstruccional: {
    field: 'modelo_instruccional',
    type: DataTypes.STRING,
  },
  horasDocente: {
    allowNull: false,
    field: 'horas_docente',
    type: DataTypes.INTEGER,
  },
  minimoHoras: {
    field: 'minimo_horas',
    type: DataTypes.INTEGER,
  },
  minimoCreditos: {
    field: 'minimo_creditos',
    type: DataTypes.INTEGER,
  },
  creditos: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  tipo: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  grado: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  fechaAutorizacion: {
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

class Asignatura extends Model {
  static associate(models) {
    this.belongsTo(models.Infraestructura, { as: 'infraestructura' });
    this.belongsTo(models.Docente, { as: 'docente' });
    this.belongsTo(models.Programa, { as: 'programa' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ASIGNATURA_TABLE,
      modelName: 'Asignatura',
      timestamps: false,
    };
  }
}

module.exports = { ASIGNATURA_TABLE, AsignaturaSchema, Asignatura };
