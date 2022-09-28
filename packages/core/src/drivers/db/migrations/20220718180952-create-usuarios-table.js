const { UsuarioSchema, USUARIO_TABLE } = require('../models/usuario');
const { ROL_TABLE, RolSchema } = require('../models/rol');
const { PERSONA_TABLE, PersonaSchema } = require('../models/persona');
const { PAIS_TABLE, PaisSchema } = require('../models/pais');
const { ESTADO_TABLE, EstadoSchema } = require('../models/estado');
const { MUNICIPIO_TABLE, MunicipioSchema } = require('../models/municipio');
const { DOMICILIO_TABLE, DomicilioSchema } = require('../models/domicilio');
const { INSTITUCION_TABLE, InstitucionSchema } = require('../models/institucion');
const { PLANTEL_TABLE, PlantelSchema } = require('../models/plantel'); // -------------
const { ACADEMIA_TABLE, AcademiaSchema } = require('../models/academia');
const { ALUMNO_OBSERVACION_TABLE, AlumnoObservacionSchema } = require('../models/alumnoObservacion');
const { CICLO_TABLE, CicloSchema } = require('../models/ciclo');
const { TIPO_SOLICITUD_TABLE, TipoSolicitudSchema } = require('../models/TipoSolicitud');
const { ESTATUS_SOLICITUD_TABLE, EstatusSolicitudSchema } = require('../models/EstatusSolicitud');
const { EVALUADOR_TABLE, EvaluadorSchema } = require('../models/evaluador'); 
const { SOLICITUD_TABLE, SolicitudSchema } = require('../models/solicitud');
const { MODALIDAD_TABLE, ModalidadSchema } = require('../models/modalidad');
const { NIVEL_TABLE, NivelSchema } = require('../models/nivel');
//const { PROGRAMA_TABLE, ProgramaSchema } = require('../models/programa');
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
    await queryInterface.createTable(CICLO_TABLE, CicloSchema);
    await queryInterface.createTable(TIPO_SOLICITUD_TABLE, TipoSolicitudSchema);
    await queryInterface.createTable(ESTATUS_SOLICITUD_TABLE, EstatusSolicitudSchema);
    await queryInterface.createTable(EVALUADOR_TABLE, EvaluadorSchema); 
    await queryInterface.createTable(SOLICITUD_TABLE, SolicitudSchema);
    //await queryInterface.createTable(MODALIDAD_TABLE, ModalidadSchema);
    //await queryInterface.createTable(NIVEL_TABLE, NivelSchema);
    //await queryInterface.createTable(PROGRAMA_TABLE, ProgramaSchema);
    /*
    await queryInterface.createTable(Alumno_TABLE, AlumnoSchema);
    await queryInterface.createTable(Alumno_grupo_TABLE, Alumno_grupoSchema);
    await queryInterface.createTable(Asignatura_TABLE, AsignaturaSchema);*/
  },

  async down(queryInterface) {
    await queryInterface.dropTable(ROL_TABLE);
    await queryInterface.dropTable(PERSONA_TABLE);
    await queryInterface.dropTable(USUARIO_TABLE);
    await queryInterface.dropTable(PAIS_TABLE);
    await queryInterface.dropTable(ESTADO_TABLE);
    await queryInterface.dropTable(MUNICIPIO_TABLE);
    await queryInterface.dropTable(DOMICILIO_TABLE);
    await queryInterface.dropTable(INSTITUCION_TABLE);
    await queryInterface.dropTable(PLANTEL_TABLE);
    await queryInterface.dropTable(ACADEMIA_TABLE);
    await queryInterface.dropTable(ALUMNO_OBSERVACION_TABLE);
    await queryInterface.dropTable(CICLO_TABLE);
    //await queryInterface.dropTable(EVALUADOR_TABLE); 
    await queryInterface.dropTable(SOLICITUD_TABLE); 
    /*await queryInterface.dropTable(TIPO_SOLICITUD_TABLE); 
    await queryInterface.dropTable(ESTATUS_SOLICITUD_TABLE); 
    await queryInterface.dropTable(MODALIDAD_TABLE);
    await queryInterface.dropTable(PROGRAMA_TABLE);
    await queryInterface.dropTable(NIVEL_TABLE);
    /*
    await queryInterface.dropTable(Alumno_TABLE);
    await queryInterface.dropTable(Alumno_grupo_TABLE);
    await queryInterface.dropTable(Asignatura_TABLE);
    await queryInterface.dropTable(Asignatura_hemerobibliografica_TABLE); */
  },
};
