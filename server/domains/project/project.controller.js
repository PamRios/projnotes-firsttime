import log from '../../config/winston';

// Importando el modelo
import ProjectModel from './project.model';

// Actions methods
// GET "/project"
const showDashboard = async (req, res) => {
  // Consultando todos los proyectos
  const projects = await ProjectModel.find({}).lean().exec();
  // Enviando los proyectos al cliente en JSON
  res.render('project/dashboardView', { projects });
};

// Actions methods
// GET "/project/add"
const add = (req, res) => {
  res.render('project/addView');
};

// POST /project/add
const addPost = async (req, res) => {
  // Rescatando la info del formulario
  const { errorData: validationError } = req;
  // En caso de haber error
  // se le informa al cliente
  if (validationError) {
    log.info('Se entrega al cliente error de validación de add Project');
    res.status(422).json(validationError);
  }
  /*
    En caso de que pase la validación
    se desestructura la información
    de la petición
    */
  const { validData: project } = req;
  try {
    /*
    Creando la instancia de un documento
    con los valores de 'project'
     */
    const savedProject = await ProjectModel.create(project);
    // Se contesta la información del proyecto al cliente
    log.info(`Se carga proyecto ${savedProject}`);
    log.info('Se redirecciona el sitema a /project');
    return res.redirect('/project');
  } catch (error) {
    log.error(
      'ln 53 project.controller: Error al guardar proyecto en la base de datos'
    );
    return res.status(500).json(error);
  }
};

// Controlador Project
export default {
  showDashboard,
  add,
  addPost,
};
