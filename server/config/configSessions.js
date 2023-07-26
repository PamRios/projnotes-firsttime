// importando manejo de sesiones
import ExpressSession from 'express-session';
// Importando Soporte para mensajes flash
import ConnectFlash from 'connect-flash';
// Importando soporte para almacenado de sesiones
import MongoStore from 'connect-mongo';
// Importando la URL de la base de datos del sistema
import configKeys from './configKeys';

// Creando objeto de opciones para el manejo de sesiones
const options = {
  secret: 'awesome',
  resave: true,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: configKeys.mongoUrl,
    ttl: 1 * 24 * 60 * 60, // Salva la sesión por 1 día
  }),
};

// Exportando función registradora
export default (app) => {
  // Creando el middleware
  const sessionMiddleware = ExpressSession(options);
  // Registrando el middleware
  app.use(sessionMiddleware);
  // Registrando el middleware de mensajes flash
  app.use(ConnectFlash());
  // Se crea middleware de mensajes para rescatar los mensajes
  // de las sesiones
  app.use((req, res, next) => {
    res.locals.successMessage = req.flash('successMessage');
    res.locals.errorMessage = req.flash('errorMessage');
    res.locals.infoMessage = req.flash('infoMessage');
    // Esta servira para passport
    res.locals.passportError = req.flash('passportError');
    next();
  });
  // Retornando la app
  return app;
};
