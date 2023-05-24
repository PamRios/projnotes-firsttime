// Importando enrutador home
import homeRouter from './domains/home/home.router';
// Importando enrutador de user
import userRouter from './domains/user/user.router';
// Importando enrutador de user
import projectRouter from './domains/projects/project.router';
// Función que agrega rutas
const addRoutes = (app) => {
  // Agregando enrutador de Home
  app.use('/', homeRouter);
  // Agregando el enrutado user
  app.use('/user', userRouter);
  // Agregando el enrutador project
  app.use('/', projectRouter);
};

// Exportando objeto
export default { addRoutes };
