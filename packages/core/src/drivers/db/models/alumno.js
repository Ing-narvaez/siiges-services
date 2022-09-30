const { Model, DataTypes, Sequelize } = require('sequelize');
const { PERSONA_TABLE } = require('./persona');
// Nota: Falta añadir más elementos (programa, situación, tipo_tramite_id)

const ALUMNO_TABLE = 'alumno';

const AlumnoSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  personaId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'persona_id',
    references: {
      model: PERSONA_TABLE,
      key: 'id',
    },
  },
  /*
  situacionId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'situacion_id',
  },
  programaId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'programa_id',
  },
  tipoTramiteId: {
    type: DataTypes.INTEGER,
    field: 'tipo_tramite_id',
  },*/
  matricula: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  adeudoMaterias: {
    type: DataTypes.INTEGER,
    field: 'adeudo_materias',
  },
  estatus: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  descripcionEstatus: {
    type: DataTypes.STRING,
    field: 'descripcion_estatus',
  },
  archivoCertificado: {
    type: DataTypes.STRING,
    field: 'archivo_certificado',
  },
  archivoNacimiento: {
    type: DataTypes.STRING,
    field: 'archivo_nacimiento',
  },
  archivoCurp: {
    type: DataTypes.STRING,
    field: 'archivo_curp',
  },
  estatusCertificado: {
    type: DataTypes.INTEGER,
    field: 'estatus_certificado',
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

class Alumno extends Model {
  static associate(models) {
    this.belongsTo(models.Personas, { as: 'persona' });
    //this.belongsTo(models.Situaciones, { as: 'situacion' });
   // this.belongsTo(models.programas, { as: 'programa' });
   // this.belongsTo(models.TiposTramitesId, { as: 'tipo_tramite_id' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ALUMNO_TABLE,
      modelName: 'Alumno',
      timestamps: false,
    };
  }
}

module.exports = { ALUMNO_TABLE, AlumnoSchema, Alumno };
