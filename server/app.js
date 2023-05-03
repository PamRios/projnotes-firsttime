// helps  to handle http errors
import createError from 'http-errors';
// import the Express Librari
import express from 'express';
// is a Core-Node library to manage systems paths
import path from 'path';
// helps to parse client cookies
import cookieParser from 'cookie-parser';
// library to log  http comunication
import morgan from 'morgan';

// importing sub routes
import indexRouter from '@server/routes/index';
import usersRouter from '@server/routes/users';
import apiRouter from '@server/routes/api';

// Setting Webpack modules
import webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';

// Importando el configurador del motor de plantillas
import configTemplateEngine from './config/templateEngine';

// importing  webpack configuration
import webpackConfig from '../webpack.dev.config';

import log from './config/winston';

// creando variable del directorio raíz
// eslint-disable-next-line
global["__rootdir"] = path.resolve(process.cwd());

const app = express();

// Get the execution mode
const nodeEnviroment = process.env.NODE_ENV || 'production';

// Deciding if we add webpack middleware or not
if (nodeEnviroment === 'development') {
  // Start webpack
  console.log('💧 Ejecutando en modo desarrollo 💧');
  // Adding the key mode with
  webpackConfig.mode = nodeEnviroment;
  // Setting the port
  webpackConfig.devServer.port = process.env.PORT;

  // Setting up Hot Module Replacement
  webpackConfig.entry = [
    'webpack-hot-middleware/client?reaload=true&timeout=1000',
    webpackConfig.entry,
  ];
  // Creating the bunbler
  const bundle = webpack(webpackConfig);
  // Enabling the express instances
  app.use(
    WebpackDevMiddleware(bundle, {
      publicPath: webpackConfig.output.publicPath,
    })
  );
  // Enabling the webpack HMR
  app.use(WebpackHotMiddleware(bundle));
} else {
  console.log('🛎 Ejecutando en modo producción 🛎');
}

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

// 👁⚙ MOTOR DE PLANTILLAS ⚙👁
configTemplateEngine(app);

// USE == REGISTERING MIDDLEWARE
// app es una instancia de express
app.use(morgan('dev', { stream: log.stream })); // log all received request //constructores de funciones -> generan funciones (req, res)
/* app.use((req, res, next)=>{
  //res.send("PÁGINA FUERA DE SERVICCIO");
  console.log("A request has been / Se ha recibido una petición");
  next();
}); no se ejecutan los demás middleware por que el primero ya contesto,
los middleware sí llevan orden de ejecución
app.use((req, res, next)=>{
  console.log(`🔑 IP: ${req.ip}`);
  next();
}) */
app.use(express.json()); // Parse request data into json
app.use(express.urlencoded({ extended: false })); // decode url info
app.use(cookieParser()); // Parse client cookies into json
// Set up the static file server
app.use(
  express.static(/* ruta de los estaticos */ path.join(__dirname, '../public'))
);
// path para que sirva en diferentes

// Registering routes
app.use('/', indexRouter);
app.use('/users', usersRouter); // Use permite definir un tramo de ruta
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  log.info(`404 Pagina no encontrada ${req.method} ${req.originalUrl}`);
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  log.error(`${err.status || 500} - ${err.message}`);
  res.render('error');
});

// module.exports = app;
export default app;
