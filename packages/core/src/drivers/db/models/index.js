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
//const { Evaluador, EvaluadorSchema } = require('./evaluador');  PENDIENTE DEJAR AL FINAL
//const { Ciclo, CicloSchema } = require('./ciclo');
//const { Nivel, NivelSchema } = require('./nivel');
/*
const { Alumno, AlumnoSchema } = require('.Alumno');
const { AlumnoGrupo, AlumnoGrupoSchema } = require('.AlumnoGrupo');
const { Asignatura, AsignaturaSchema } = require('.Asignatura');
*/
function setupModels(sequelize) {
  Rol.init(RolSchema, Rol.config(sequelize));
  Pais.init(PaisSchema, Pais.config(sequelize));
  Estado.init(EstadoSchema, Estado.config(sequelize));
  Municipio.init(MunicipioSchema, Municipio.config(sequelize));
  Domicilio.init(DomicilioSchema, Domicilio.config(sequelize));
  Persona.init(PersonaSchema, Persona.config(sequelize));
  Usuario.init(UsuarioSchema, Usuario.config(sequelize));
  Institucion.init(InstitucionSchema, Institucion.config(sequelize));
  Plantel.init(PlantelSchema, Plantel.config(sequelize));
  Academia.init(AcademiaSchema, Academia.config(sequelize));
  AlumnoObservacion.init(AlumnoObservacionSchema, AlumnoObservacion.config(sequelize));
  //Evaluador.init(EvaluadorSchema, Evaluador.config(sequelize));  PENDIENTE DEJAR AL FINAL
  //Ciclo.init(CicloSchema, Ciclo.config(sequelize));
  //Nivel.init(NivelSchema, Nivel.config(sequelize));
  /*
  Alumno.init(AlumnoSchema, Alumno.config(sequelize));
  Alumno_grupo.init(Alumno_grupoSchema, Alumno_grupo.config(sequelize));
  Asignatura.init(AsignaturaSchema, Asignatura.config(sequelize));
 */

  Rol.associate(sequelize.models);
  Pais.associate(sequelize.models);
  Estado.associate(sequelize.models);
  Municipio.associate(sequelize.models);
  Domicilio.associate(sequelize.models);
  Persona.associate(sequelize.models);
  Usuario.associate(sequelize.models);
  Institucion.associate(sequelize.models);
  Plantel.associate(sequelize.models);
  Academia.associate(sequelize.models);
  AlumnoObservacion.associate(sequelize.models);
  //Evaluador.associate(sequelize.models);  PENDIENTE DEJAR AL FINAL
  //Ciclo.associate(sequelize.models);
  //Nivel.associate(sequelize.models)
  /*
  Alumno.associate(sequelize.models);
  AlumnoGrupo.associate(sequelize.models);
  Asignatura.associate(sequelize.models);
  AsignaturaHemerobibliografica.associate(sequelize.models); */
}

module.exports = setupModels;
