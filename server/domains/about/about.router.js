// Importando el Router de Express
import { Router } from 'express';

// Importando el controlador
import aboutController from './about.controller';

// Creando la instancia del enrutador
const router = new Router();

/* Enrutamos
GET '/about'
*/
router.get('/about', aboutController.about);

// Exportando tramo de ruta
export default router;
