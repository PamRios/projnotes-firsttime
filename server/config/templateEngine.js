// importando biblioteca de handlebars
import { engine as exphbs } from 'express-handlebars';
import path from 'path';

/* Crear una función de configuración
que se exportara por defecto */
export default (app) => {
  // Integrando un nuevo motor de plantillas
  // Compatible con consolidatejs
  app.engine(
    'hbs',
    exphbs({
      // Definición de la extensión de las plantillas
      extname: 'hbs',
      // Estableciendo el layout por defecto
      defaultLayout: 'main',
    })
  );

  /* Seleccionando el motor de plantillas
  que se integro anteriormente */
  app.set('view engine', 'hbs');
  app.set('views', path.join(__dirname, '..', 'views'));

  // Se retorna la instancia recbida como argumento
  return app;
};
