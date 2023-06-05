// Importando el Router de Express
import { Router } from 'express';

// Importando el controlador
import projectController from './project.controller';

// Importando factory de validación
import ValidateFactory from '../../services/validateFactory';

// Importando el validador de proyectos
import projectValidator from './project.validator';

// Creando la instancia del enrutador
const router = new Router();

/* Enrutamos
GET '/project
*/
router.get('/', projectController.showDashboard);

/* Enrutamos
GET '/projects/add'
*/
router.get('/add', projectController.add);

// POST "/project/add"
router.post(
  '/add',
  ValidateFactory({
    schema: projectValidator.projectSchema,
    getObject: projectValidator.getProject,
  }),
  projectController.addPost
);

// Exportando tramo de ruta
export default router;
