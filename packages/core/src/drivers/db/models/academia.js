const { Model, DataTypes, Sequelize } = require('sequelize');

const ACADEMIA_TABLE = 'academias';

const AcademiaSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
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

class Academia extends Model {
  static associate() {

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ACADEMIA_TABLE,
      modelName: 'Academia',
      timestamps: false,
    };
  }
}

module.exports = { ACADEMIA_TABLE, AcademiaSchema, Academia };
