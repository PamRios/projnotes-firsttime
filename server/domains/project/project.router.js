// Importando el Router de Express
import { Router } from 'express';

// Importando el controlador
import projectController from './project.controller';

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

// Exportando tramo de ruta
export default router;
