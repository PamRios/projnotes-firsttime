// Importando el Router de Express
import { Router } from 'express';

// Importando el controlador
import userController from './user.controller';

// Creando la instancia del enrutador
const router = new Router();

/* Enrutamos
GET '/user/login'
*/
router.get('/login', userController.login);

/* Enrutamos
GET '/user/logout'
*/
router.get('/logout', userController.logout);

/* Enrutamos
GET '/user/register'
*/
router.get('/register', userController.register);

// Exportando tramo de ruta
export default router;
