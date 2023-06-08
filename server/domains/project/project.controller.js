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

// GET "/project/edit/:id"
const edit = async (req, res) => {
  // Extrayendo el id por medio de los parametros de url
  const { id } = req.params;
  // Buscando en la base de datos
  try {
    log.info(`Se inicia la busqueda del proyecto con el id: ${id}`);
    const project = await ProjectModel.findOne({ _id: id }).lean().exec();
    if (project === null) {
      log.info(`No se encontro el proyecto con el id: ${id}`);
      return res
        .status(404)
        .json({ fail: `No se encontro el proyecto con el id: ${id}` });
    }
    // Se manda a renderizar la vista de edición
    // res.render('project/editView', { id });
    log.info(`Proyecto encontrado con el id: ${id}`);
    return res.render('project/editView', { project });
  } catch (error) {
    log.error('Ocurre un error en: metodo "error" de project.controller');
    return res.status(500).json(error);
  }
};

// PUT "/project/edit/:id"
const editPut = async (req, res) => {
  const { id } = req.params;
  // Rescatando la info del formulario
  const { errorData: validationError } = req;
  // En caso de haber error
  // Se le informa al cliente
  if (validationError) {
    log.info(`Error de validación del proyecto con id: ${id}`);
    // Se desestructuran los datos de validación
    const { value: project } = validationError;
    // Se exytaen los campos que fallaron en la validación
    const errorModel = validationError.inner.reduce((prev, curr) => {
      // Creando una variable temporal para
      // Evitar el error "no-param-reassing"
      const workingPrev = prev;
      workingPrev[`${curr.path}`] = curr.message;
      return workingPrev;
    }, {});
    return res.status(422).render('project/editView', { project, errorModel });
  }
  // Si no hay error
  const project = await ProjectModel.findOne({ _id: id });
  if (project == null) {
    log.info(`No se encontro documento para actualizar con id: ${id}`);
    return res
      .status(404)
      .send(`No se encontro documento para actualizar con el id: ${id}`);
  }
  // En caso de encontrarse el documento se actualizan los datos
  const { validData: newProject } = req;
  project.name = newProject.name;
  project.description = newProject.description;
  try {
    // Se salvan los cambios
    log.info(`Actualizando el proyecto con id: ${id}`);
    await project.save();
    return res.redirect(`/project/edit/${id}`);
  } catch (error) {
    log.error(`Error al actualizar proyecto con id: ${id}`);
    return res.status(500).json(error);
  }
};

// DELETE "/project/:id"
const deleteProject = async (req, res) => {
  // Extrayendo el id de los parametros
  const { id } = req.params;
  // usando el modelo para borrar proyecto
  try {
    const result = await ProjectModel.findByIdAndRemove(id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(200).json(error);
  }
};

// Controlador Project
export default {
  showDashboard,
  add,
  addPost,
  edit,
  editPut,
  deleteProject,
};
