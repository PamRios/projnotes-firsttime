// Importando enrutador home
import homeRouter from './domains/home/home.router';
// Importando enrutador de user
import userRouter from './domains/user/user.router';
// Importando enrutador de user
import projectRouter from './domains/projects/project.router';

import aboutRouter from './domains/about/about.router';

// Función que agrga rutas
const addRoutes = (app) => {
  // Agregando enrutador de Home
  app.use('/', homeRouter);
  // Agregando el enrutado user
  app.use('/user', userRouter);
  // Agregando el enrutador project
  app.use('/', projectRouter);
  // Agregando el enrutador de about
  app.use('/about', aboutRouter);
  return app;
};

// Exportando objeto
export default { addRoutes };
