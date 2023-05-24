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
import app from '../app';

// Importing winston logger
import log from '../config/winston';

// Importando config Keys
import configKeys from '../config/configKeys';
/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(configKeys.port);
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

// const port = normalizePort(process.env.PORT || '3000');
// Store the port in the app
app.set('port', port);

log.info('The server is created from the express instance');

const server = http.createServer(app);
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

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  /* const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`; */
  // debug(`URL DE APP ${process.env.APP_URL}`); //interpolación ${} backtics
  log.info(`✨✨ Listening on ${process.env.APP_URL}:${addr.port} ✨✨`);
}

/**
 * Listen on provided port, on all network interfaces.
 */
// Specifying the port where the server would be listening
server.listen(port);
// Attaching callbacks to events
server.on('error', onError);
server.on('listening', onListening);
