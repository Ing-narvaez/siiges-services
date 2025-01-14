const { Model, DataTypes, Sequelize } = require('sequelize');
const { PLANTEL_TABLE } = require('./plantel');
const { HIGIENE_TABLE } = require('./higiene');

const PLANTEL_HIGIENE_TABLE = 'planteles_Higiene';

const PlantelHigieneSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },

  plantelId: {
    type: DataTypes.INTEGER,
    field: 'plantel_id',
    references: {
      model: PLANTEL_TABLE,
      key: 'id',
    },
  },

  higienelId: {
    type: DataTypes.INTEGER,
    field: 'higiene_id',
    references: {
      model: HIGIENE_TABLE,
      key: 'id',
    },
  },

  cantidad: {
    type: DataTypes.STRING,
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

class PlantelHigiene extends Model {
    static associate() {
      this.belongsTo(models.Plantel, { as: 'plantel' });
      this.belongsTo(models.Higiene, { as: 'higiene' });
    }
  
    static config(sequelize) {
      return {
        sequelize,
        tableName: PLANTEL_HIGIENE_TABLE,
        modelName: 'PlantelHigiene',
        timestamps: false,
      };
    }
  }
  module.exports = { PLANTEL_HIGIENE_TABLE, PlantelHigieneSchema, PlantelHigiene };