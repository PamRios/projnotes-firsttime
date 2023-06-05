import log from '../../config/winston';

// Importando el modelo
import ProjectModel from './project.model';

// Actions methods
// GET "/project"
const showDashboard = (req, res) => {
  res.send('🛠 UNDER CONSTRCTION: GET /project');
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
    log.info('Se entrega al cliente la información del proyecto cargado');
    return res.status(200).json(savedProject);
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
