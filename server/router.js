// Importando enrutador home
import homeRouter from './domains/home/home.router';

// Función que agrga rutas
const addRoutes = (app) => {
  // Agregando enrutador de Home
  app.use('/', homeRouter);
  return app;
};

// Exportando objeto
export default { addRoutes };
