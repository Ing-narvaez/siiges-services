const { Usuario, UsuarioSchema } = require('./usuario');
const { Rol, RolSchema } = require('./rol');
const { Persona, PersonaSchema } = require('./persona');
const { Pais, PaisSchema } = require('./pais');
const { Estado, EstadoSchema } = require('./estado');
const { Municipio, MunicipioSchema } = require('./municipio');
const { Domicilio, DomicilioSchema } = require('./domicilio');
const { Institucion, InstitucionSchema } = require('./institucion');
const { Plantel, PlantelSchema } = require('./plantel');
const { Academia, AcademiaSchema } = require('./academia');
const { AlumnoObservacion, AlumnoObservacionSchema } = require('./alumnoObservacion');
const { Ciclo, CicloSchema } = require('./ciclo');
const { TipoSolicitud, TipoSolicitudSchema } = require('./tipoSolicitud');
const { EstatusSolicitud, EstatusSolicitudSchema } = require('./estatusSolicitud');
const { Evaluador, EvaluadorSchema } = require('./evaluador'); 
// const { Alumno, AlumnoSchema } = require('./alumno');  // Agregar a esta relación tablas situacion y tipoTramite
const { Nivel, NivelSchema } = require('./nivel');  
const { Modalidad, ModalidadSchema } = require('./modalidad');  
const { Solicitud, SolicitudSchema } = require('./solicitud');
const { Programa, ProgramaSchema } = require('./programa');
const { Cumplimiento, CumplimientoSchema } = require('./cumplimiento');
const { ProgramaEvaluacion, ProgramaEvaluacionSchema } = require('./programaEvaluacion');
const { EdificioNivel, EdificioNivelSchema } = require('./edificioNivel');
const { PlantelEdificioNivel, PlantelEdificioNivelSchema } = require('./plantelEdificioNivel');

function setupModels(sequelize) {
  Usuario.init(UsuarioSchema, Usuario.config(sequelize));
  Rol.init(RolSchema, Rol.config(sequelize));
  Persona.init(PersonaSchema, Persona.config(sequelize));
  Pais.init(PaisSchema, Pais.config(sequelize));
  Estado.init(EstadoSchema, Estado.config(sequelize));
  Municipio.init(MunicipioSchema, Municipio.config(sequelize));
  Domicilio.init(DomicilioSchema, Domicilio.config(sequelize));
  Institucion.init(InstitucionSchema, Institucion.config(sequelize));
  Plantel.init(PlantelSchema, Plantel.config(sequelize));
  Academia.init(AcademiaSchema, Academia.config(sequelize));
  AlumnoObservacion.init(AlumnoObservacionSchema, AlumnoObservacion.config(sequelize));
  Ciclo.init(CicloSchema, Ciclo.config(sequelize));
  EstatusSolicitud.init(EstatusSolicitudSchema, EstatusSolicitud.config(sequelize));
  TipoSolicitud.init(TipoSolicitudSchema, TipoSolicitud.config(sequelize));
  Solicitud.init(SolicitudSchema, Solicitud.config(sequelize));
  Modalidad.init(ModalidadSchema, Modalidad.config(sequelize));  
  Evaluador.init(EvaluadorSchema, Evaluador.config(sequelize)); 
  Nivel.init(NivelSchema, Nivel.config(sequelize)); 
  Programa.init(ProgramaSchema, Programa.config(sequelize));
  Cumplimiento.init(CumplimientoSchema, Cumplimiento.config(sequelize));
  // Alumno.init(AlumnoSchema, Alumno.config(sequelize));  // Agregar a esta relación tablas situacion y tipoTramite
  ProgramaEvaluacion.init(ProgramaEvaluacionSchema, ProgramaEvaluacion.config(sequelize));
  EdificioNivel.init(EdificioNivelSchema, EdificioNivel.config(sequelize));
  PlantelEdificioNivel.init(PlantelEdificioNivelSchema, PlantelEdificioNivel.config(sequelize));

  Usuario.associate(sequelize.models);
  Rol.associate(sequelize.models);
  Persona.associate(sequelize.models);
  Pais.associate(sequelize.models);
  Estado.associate(sequelize.models);
  Municipio.associate(sequelize.models);
  Domicilio.associate(sequelize.models);
  Institucion.associate(sequelize.models);
  Plantel.associate(sequelize.models);
  Academia.associate(sequelize.models);
  AlumnoObservacion.associate(sequelize.models);
  Ciclo.associate(sequelize.models);
  TipoSolicitud.associate(sequelize.models);
  EstatusSolicitud.associate(sequelize.models);
  Solicitud.associate(sequelize.models);
  Modalidad.associate(sequelize.models);
  Evaluador.associate(sequelize.models);
  Nivel.associate(sequelize.models); 
  Programa.associate(sequelize.models);
  Cumplimiento.associate(sequelize.models);
  // Alumno.associate(sequelize.models);  //  Agregar a esta relación tablas situacion y tipoTramite
  ProgramaEvaluacion.associate(sequelize.models);
  EdificioNivel.associate(sequelize.models);
  PlantelEdificioNivel.associate(sequelize.models);
}

module.exports = setupModels;
