const { Model, DataTypes, Sequelize } = require('sequelize');
const { CUMPLIMIENTO_TABLE } = require('./cumplimiento');
const { EVALUADOR_TABLE } = require('./evaluador');

const PROGRAMA_EVALUACION_TABLE = 'programa_evaluacion';

const ProgramaEvaluacionSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      programaId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'programa_id',
      },
      cumplimientoId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'cumplimiento_id',
        references: {
            model: CUMPLIMIENTO_TABLE,
            key: 'id',
          }
      },
      evaluadorId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'evaluador_id',
        references: {
            model: EVALUADOR_TABLE,
            key: 'id',
          },
      },
      estatus: {
        type: DataTypes.INTEGER,
      },
      fecha: {
        type: DataTypes.DATE,
      },
      cumplimiento: {
        type: DataTypes.STRING,
      },
      valoracion: {
        type: DataTypes.STRING,
      },
      numero: {
        type: DataTypes.INTEGER,
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

class ProgramaEvaluacion extends Model {
    static associate() {
     this.belongsTo(models.cumplimiento, { as: 'cumplimiento' });
     this.belongsTo(models.evaluador, { as: 'evaluador' });
    }
  
    static config(sequelize) {
      return {
        sequelize,
        tableName: PROGRAMA_EVALUACION_TABLE,
        modelName: 'programaEvaluacion',
        timestamps: false,
      };
    }
  }
  module.exports = { PROGRAMA_EVALUACION_TABLE, ProgramaEvaluacionSchema, ProgramaEvaluacion };