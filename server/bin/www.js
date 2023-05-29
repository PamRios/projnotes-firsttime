#!/usr/bin/env node

/**
 * Module dependencies.
 */

// Se importa la lógica del servidor
// Require importa< código de otro archivo Server login
// import app from "../app";
// se importa una dependencia externa -> bibliotecas externas
// debug -> mandar a la salida de la consola lo que está pasando (mensajes log)
// import Debug from 'debug';
/* biblioteca interna del nucleo de node / modulo que permite la comunicaciones con un cliente vía
el protocolo http facilita no  tener que programnar todo el servidor */
import http from 'http';
// import app from '../app';

// Importing winston logger
import log from '../config/winston';

// Importando config Keys
import configKeys from '../config/configKeys';

// Importando ODM
import MongooseOdm from '../services/odm';
/**
 * Get port from environment and store in Express.
 */

// const debug = Debug('projnotes');

/* Se asegura que el valor si es string lo convierte en numerico
process.env.PORT -> objeto que simboliza el proceso de fabricacion
envi -> enviroment -> variables de entorno ->  (entorno == S.O.) */

/**
 * Create HTTP server.
 */

// (req, res) => {acciones}

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

const port = normalizePort(configKeys.port);

// const port = normalizePort(process.env.PORT || '3000');
// Store the port in the app
// app.set('port', port);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
/* eslint-disable */
  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      log.error(`${bind} requires elevated privileges`);
      process.exit(1);
    case 'EADDRINUSE':
      log.error(`${bind} is already in use`);
      process.exit(1);
    default:
      throw error;
  }
}

// Rutina de arranque del servidor
function startServer(dbConnection) {
  import('../app').then((module) => {
    // Importa el modulo por defecto
    const app = module.default;
    // Store the port info in the app
    app.set('port', port);

    // Create HTTP Server
    log.info('The server is created from the express instance');
    const server = http.createServer(app);

    // Event Lister for HTTP server "listening" event
    function onListening() {
      const addr = server.address();
      log.info(`✨✨ Listening on ${process.env.APP_URL}:${addr.port} ✨✨`);
    }

    // Attaching callbacks to events
    server.on('error', onError);
    server.on('listening', onListening);
    // Store the dbConnection in the app
    app.set('dbConnection', dbConnection);
    // Starting Server 
    server.listen(port);
  })
}

// IIFE
(async () =>{
  // Creando la instancia del ODM
  const mongooseOdm = new MongooseOdm(configKeys.mongoUrl);
  // Conectando a la base de datos
  try {
    const dbConnection = await mongooseOdm.connect();
    if (dbConnection) {
      log.info(
        `🛢 Conexión exitosa a la base de datos: ${configKeys.mongoUrl} 🛢`,
      );
      //Iniciando el servidor
      startServer(dbConnection);
    }
  } catch (error){
    log.error(`Error wwww.js ln 103: ${error.message}`);
  }
})();

/**
 * Event listener for HTTP server "listening" event.
 */



/**
 * Listen on provided port, on all network interfaces.
 */
// Specifying the port where the server would be listening


