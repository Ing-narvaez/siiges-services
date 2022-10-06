const { Model, DataTypes, Sequelize } = require('sequelize');
const { MODALIDAD_TABLE } = require('./modalidad');

const CUMPLIMIENTO_TABLE = 'cumplimiento';

const CumplimientoSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nombre: {
        type: DataTypes.STRING,
      },
      modalidadId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'modalidad_id',
        references: {
            model: MODALIDAD_TABLE,
            key: 'id',
          },
      },
      porcentajecumplimiento: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      porcentajemaximo: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'porcentaje_maximo',
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

    class cumplimiento extends Model {
        static associate() {
            this.belongsTo(models.modalidad, { as: 'modalidad' });
        }
      
        static config(sequelize) {
          return {
            sequelize,
            tableName: CUMPLIMIENTO_TABLE,
            modelName: 'cumplimiento',
            timestamps: false,
          };
        }
      }
      module.exports = { CUMPLIMIENTO_TABLE, CumplimientoSchema, cumplimiento };