import log from '../../config/winston';

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
const addPost = (req, res) => {
  // Rescatando la info del formulario
  const { errorData: validationError } = req;
  // En caso de haber error
  // se le informa al cliente
  if (validationError) {
    log.info('Se entrega al cliente error de validación de add Project');
    res.status(422).json(validationError);
  } else {
    /*
    En caso de que pase la validación
    se desestructura la información
    de la petición
    */
    const { validData: project } = req;
    /*
    Se contesta la información
    del proyecto al cliente
    */
    log.info('Se entrega al cliente información del proyecto cargado');
    res.status(200).json(project);
  }
};

// Controlador Project
export default {
  showDashboard,
  add,
  addPost,
};
