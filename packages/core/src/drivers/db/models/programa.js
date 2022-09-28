const { Model, DataTypes, Sequelize } = require('sequelize');
const { EVALUADOR_TABLE } = require('./evaluador');
const { CICLO_TABLE } = require('./ciclo');
const { NIVEL_TABLE } = require('./nivel');
const { SOLICITUD_TABLE } = require('./solicitud');
const { MODALIDAD_TABLE } = require('./modalidad');
const { PLANTEL_TABLE } = require('./plantel');
const { PERSONA_TABLE } = require('./persona'); 

const PROGRAMA_TABLE = 'programas';

const ProgramaSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
},
evaluador: {
    type: DataTypes.INTEGER,
    //field: 'evaluador_id',
    references: {
      model: EVALUADOR_TABLE,
      key: 'id',
    },
  },
  cicloId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'ciclo_id',
    references: {
      model: CICLO_TABLE,
      key: 'id',
    },
  },
  nivelId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'nivel_id',
    references: {
      model: NIVEL_TABLE,
      key: 'id',
    },
  },
  solicitudId: { 
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'solicitud_id',
    references: {
      model: SOLICITUD_TABLE,
      key: 'id',
    },
  },
  modalidad: {
    allowNull: false,
    type: DataTypes.INTEGER,
    //field: 'modalidad_id',
    references: {
      model: MODALIDAD_TABLE,
      key: 'id',
    },
  },
  plantelId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'plantel_id',
    references: {
      model: PLANTEL_TABLE,
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
  duracion: {
    type: DataTypes.STRING,
  },
  duracionPeriodos: {
    type: DataTypes.STRING,
    field: 'duracion_periodos',
  },
  objetivos: {
    type: DataTypes.STRING,
  },
  antecedentes: {
    type: DataTypes.STRING,
  },
  creditos: {
    type: DataTypes.STRING,
  },
  minimoHorasOptativas: {
    type: DataTypes.INTEGER,
    field: 'minimo_horas_optativas',
  },
  minimoCreditosOptativas: {
    type: DataTypes.STRING,
    field: 'minimo_creditos_optativas',
  },
  vigencia: {
    type: DataTypes.DATE,
  },
  fechaSurteEfecto: {
    type: DataTypes.DATE,
    field: 'fecha_surte_efecto',
  },
  acuerdoRvoe: {
    type: DataTypes.STRING,
    field: 'acuerdo_rvoe',
  },
  nombre: {
    type: DataTypes.STRING,
  },
  tipo: {
    type: DataTypes.INTEGER,
  },
  actualizacion: {
    type: DataTypes.STRING,
  },
  seguimientoEgresados: {
    type: DataTypes.STRING,
    field: 'seguimiento_egresados'
  },
  totalAlumnosOtrosRvoes: {
    type: DataTypes.INTEGER,
    field: 'total_alumnos_otros_rvoes',
  },
  conveniosVinculacion: {
    type: DataTypes.STRING,
    field: 'convenios_vinculacion',
  },
  fuentesInformacion: {
    type: DataTypes.STRING,
    field: 'fuentes_informacion',
  },
  estudioOfertaDemanda: {
    type: DataTypes.STRING,
    field: 'estudio_oferta_demanda',
  },
  lineasGeneracionAplicacionConocimiento: {
    type: DataTypes.STRING,
    field: 'lineas_generacion_aplicacion_conocimiento',
  },
  necesidadProfesional: {
    type: DataTypes.STRING,
    field: 'necesidad_profesional',
  },
  necesidadInstitucional: {
    type: DataTypes.STRING,
    field: 'necesidad_institucional',
  },
  recursosOperacion: {
    type: DataTypes.STRING,
    field: 'recursos_operacion',
  },
  necesidadSocial: {
    type: DataTypes.STRING,
    field: 'necesidad_social',
  },
  antecedenteAcademico: {
    type: DataTypes.STRING,
    field: 'antecedente_academico',
  },
  perfilIngresoConocimientos: {
    type: DataTypes.STRING,
    field: 'perfil_ingreso_conocimientos',
  },
  perfilIngresoHabilidades: {
    type: DataTypes.STRING,
    field: 'perfil_ingreso_habilidades',
  },
  perfilIngresoActitudes: {
    type: DataTypes.STRING,
    field: 'perfil_ingreso_actitudes',
  },
  perfilEgresoConocimientos: {
    type: DataTypes.STRING,
    field: 'perfil_egreso_conocimientos',
  },
  perfilEgresoHabilidades: {
    type: DataTypes.STRING,
    field: 'perfil_egreso_habilidades',
  },
  perfilEgresoActitudes: {
    type: DataTypes.STRING,
    field: 'perfil_egreso_actitudes',
  },
  metodosInduccion: {
    type: DataTypes.STRING,
    field: 'metodos_induccion',
  },
  procesoSeleccion: {
    type: DataTypes.STRING,
    field: 'proceso_seleccion',
  },
  mapaCurricular: {
    type: DataTypes.STRING,
    field: 'mapa_curricular',
  },
  flexibilidadCurricular: {
    type: DataTypes.STRING,
    field: 'flexibilidad_curricular',
  },
  objetivoGeneral: {
    type: DataTypes.STRING,
    field:"objetivo_general",
  },
  ovjetivosParticulares: {
    type: DataTypes.STRING,
    field: 'objetivos_particulares',
  },
  otrosRvoes: {
    type: DataTypes.STRING,
    field: 'otros_rvoes',
  },
  fechaAsignacionEvaluador: {
    type: DataTypes.DATE,
    field: 'fecha_asignacion_evaluador',
  },
  calificacionMinima:{
    type: DataTypes.INTEGER,
    field: 'calificacion_minima',
  },
  calificacionMaxima: {
    type: DataTypes.INTEGER,
    field: 'calificacion_maxima',
  },
  calificacionAprobatoria: {
    type: DataTypes.INTEGER,
    field: 'calificacion_aprobatoria',
  },
  calificacionDecimal: {
    type: DataTypes.INTEGER,
    field: 'calificacion_decimal',
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
    class Programa extends Model {
      static associate(models) {
        this.belongsTo(models.Evaluador, { as: 'evaluador' });
        this.belongsTo(models.Ciclo, { as: 'ciclo' });
        this.belongsTo(models.Nivel, { as: 'nivel' });
        this.belongsTo(models.Solicitud, { as: 'solicitud' });
        this.belongsTo(models.Modalidad, { as: 'modalidad' });
        this.belongsTo(models.Plantel, { as: 'plantel' });
        this.belongsTo(models.Persona, { as: 'persona' });
      }
    
      static config(sequelize) {
        return {
          sequelize,
          tableName: PROGRAMA_TABLE,
          modelName: 'Programa',
          timestamps: false,
        };
      }
    }
    module.exports = { PROGRAMA_TABLE, ProgramaSchema, Programa };
    

