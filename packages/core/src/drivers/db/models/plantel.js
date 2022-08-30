const { Model, DataTypes, Sequelize } = require('sequelize');
const { INSTITUCION_TABLE } = require('./institucion');
const { DOMICILIO_TABLE } = require('./domicilio');
const { PERSONA_TABLE } = require('./persona');

const PLANTEL_TABLE = 'planteles';

const PlantelSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  institucionId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'institucion_id',
    references: {
      model: INSTITUCION_TABLE,
      key: 'id',
    },
  },
  domicilioId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'domicilio_id',
    references: {
      model: DOMICILIO_TABLE,
      key: 'id',
    },
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
  rectorId: {
    type: DataTypes.INTEGER,
    field: 'rector_id',
  },
  email1: {
    type: DataTypes.STRING,
  },
  email2: {
    type: DataTypes.STRING,
  },
  email3: {
    type: DataTypes.STRING,
  },
  dimensiones: {
    type: DataTypes.STRING,
  },
  redesSociales: {
    type: DataTypes.STRING,
    field: 'redes_sociales',
  },
  conveniosBibliotecas: {
    type: DataTypes.STRING,
    field: 'convenios_bibliotecas',
  },
  especificaciones: {
    type: DataTypes.STRING,
  },
  claveCentroTrabajo: {
    type: DataTypes.STRING,
    field: 'clave_centro_trabajo',
  },
  telefono1: {
    type: DataTypes.STRING,
  },
  telefono2: {
    type: DataTypes.STRING,
  },
  telefono3: {
    type: DataTypes.STRING,
  },
  paginaWeb: {
    type: DataTypes.STRING,
  },
  caracteristicaInmueble: {
    type: DataTypes.STRING,
    field: 'caracteristica_inmueble',
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

class Plantel extends Model {
  static associate(models) {
    this.belongsTo(models.Institucion, { as: 'institucion' });
    this.belongsTo(models.Domicilio, { as: 'domicilio' });
    this.belongsTo(models.Persona, { as: 'persona' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PLANTEL_TABLE,
      modelName: 'Plantel',
      timestamps: false,
    };
  }
}
module.exports = { PLANTEL_TABLE, PlantelSchema, Plantel };
