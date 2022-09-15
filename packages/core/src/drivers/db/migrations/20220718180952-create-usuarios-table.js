const { UsuarioSchema, USUARIO_TABLE } = require('../models/usuario');
const { ROL_TABLE, RolSchema } = require('../models/rol');
const { DOMICILIO_TABLE, DomicilioSchema } = require('../models/domicilio');
const { PERSONA_TABLE, PersonaSchema } = require('../models/persona');
const { PAIS_TABLE, PaisSchema } = require('../models/pais');
const { ESTADO_TABLE, EstadoSchema } = require('../models/estado');
const { MUNICIPIO_TABLE, MunicipioSchema } = require('../models/municipio');
const { PLANTEL_TABLE, PlantelSchema } = require('../models/plantel'); // -------------
const { INSTITUCION_TABLE, InstitucionSchema } = require('../models/institucion');
const { ACADEMIA_TABLE, AcademiaSchema } = require('../models/academia');
const { ALUMNO_OBSERVACION_TABLE, AlumnoObservacionSchema } = require('../models/alumnoObservacion');
//const { EVALUADOR_TABLE, EvaluadorSchema } = require('../models/evaluador'); PENDIENTE DEJAR AL FINAL
//const { CICLO_TABLE, CicloSchema } = require('../models/ciclo');
//const { NIVEL_TABLE, NivelSchema } = require('../models/nivel');
/*
const { Alumno_TABLE, AlumnoSchema } = require('../models/Alumno');
const { Alumno_grupo_TABLE, Alumno_grupoSchema } = require('../models/alumnoGrupo');
*/
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(ROL_TABLE, RolSchema);
    await queryInterface.createTable(PAIS_TABLE, PaisSchema);
    await queryInterface.createTable(ESTADO_TABLE, EstadoSchema);
    await queryInterface.createTable(MUNICIPIO_TABLE, MunicipioSchema);
    await queryInterface.createTable(DOMICILIO_TABLE, DomicilioSchema);
    await queryInterface.createTable(PERSONA_TABLE, PersonaSchema);
    await queryInterface.createTable(USUARIO_TABLE, UsuarioSchema);
    await queryInterface.createTable(INSTITUCION_TABLE, InstitucionSchema);
    await queryInterface.createTable(PLANTEL_TABLE, PlantelSchema);
    await queryInterface.createTable(ACADEMIA_TABLE, AcademiaSchema);
    await queryInterface.createTable(ALUMNO_OBSERVACION_TABLE, AlumnoObservacionSchema);
    //await queryInterface.createTable(EVALUADOR_TABLE, EvaluadorSchema);  PENDIENTE DEJAR AL FINAL
    //await queryInterface.createTable(CICLO_TABLE, CicloSchema);
    //await queryInterface.createTable(NIVEL_TABLE, NivelSchema);
    /*
    await queryInterface.createTable(Alumno_TABLE, AlumnoSchema);
    await queryInterface.createTable(Alumno_grupo_TABLE, Alumno_grupoSchema);
    await queryInterface.createTable(Asignatura_TABLE, AsignaturaSchema);*/
  },

  async down(queryInterface) {
    await queryInterface.dropTable(ROL_TABLE);
    await queryInterface.dropTable(PAIS_TABLE);
    await queryInterface.dropTable(ESTADO_TABLE);
    await queryInterface.dropTable(MUNICIPIO_TABLE);
    await queryInterface.dropTable(DOMICILIO_TABLE);
    await queryInterface.dropTable(PERSONA_TABLE);
    await queryInterface.dropTable(USUARIO_TABLE);
    await queryInterface.dropTable(INSTITUCION_TABLE);
    await queryInterface.dropTable(PLANTEL_TABLE);
    await queryInterface.dropTable(ACADEMIA_TABLE);
    await queryInterface.dropTable(ALUMNO_OBSERVACION_TABLE);
    //await queryInterface.dropTable(EVALUADOR_TABLE);  PENDIENTE DEJAR AL FINAL
   // await queryInterface.dropTable(CICLO_TABLE);
   // await queryInterface.dropTable(NIVEL_TABLE);
    /*
    await queryInterface.dropTable(Alumno_TABLE);
    await queryInterface.dropTable(Alumno_grupo_TABLE);
    await queryInterface.dropTable(Asignatura_TABLE);
    await queryInterface.dropTable(Asignatura_hemerobibliografica_TABLE); */
  },
};
