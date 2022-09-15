const { Model, DataTypes, Sequelize } = require('sequelize');
const { EVALUADOR_TABLE } = require('./evaluador');

const PROGRAMA_TABLE = 'ciclos';

const programaSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
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
};