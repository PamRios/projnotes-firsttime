// Importando el Router de Express
import { Router } from 'express';

// Importando el controlador
import homeController from './home.controller';

// Creando la instancia del enrutador
const router = new Router();

/* Enrutamos
GET '/'
GET '/home'
GET '/index'
*/
router.get(['/', '/home', '/index'], homeController.home);

// Exportando tramo de ruta
export default router;
