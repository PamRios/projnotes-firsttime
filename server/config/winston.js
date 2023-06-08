// Importando el core de winston
// y la función format de winston
import winston, { format } from 'winston';
import path from 'path';

// se desestructuran funciones para realizar la
// composicion del formato
const { combine, timestamp, label, printf, colorize } = format;

// creando variable en el directorio raíz
// eslint-disable-next-line
global['__rootdir'] = path.resolve(process.cwd());

// define un esquema de colores
// segun el grado de severidad
const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'blue',
};

// agregando el esquema de colores a winston
winston.addColors(colors);

// ===Se crean las plantillas de los formatos

// Formato para consola
const myConsoleFormat = combine(
  // Agregando colores al formato
  colorize({ all: true }),
  label({ label: '📣' }),
  timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
  // Función de impresión
  printf(
    (info) => `${info.level}: ${info.label}: ${info.timestamp}: ${info.message}`
  )
);

// Formato para los archivos
const myFileFormat = combine(
  format.uncolorize(),
  timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
  format.json()
);

// creando el objeto para cada transporte
const options = {
  infoFile: {
    level: 'info',
    filename: `${__rootdir}/server/logs/info.log`,
    handleExceptions: false,
    maxSize: 5242880,
    maxFiles: 5,
    format: myFileFormat,
  },
  warnFile: {
    level: 'info',
    filename: `${__rootdir}/server/logs/warn.log`,
    handleExceptions: false,
    maxSize: 5242880,
    maxFiles: 5,
    format: myFileFormat,
  },
  errorFile: {
    level: 'error',
    filename: `${__rootdir}/server/logs/error.log`,
    handleExceptions: false,
    maxSize: 5242880,
    maxFiles: 5,
    format: myFileFormat,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    format: myConsoleFormat,
  },
};

// se crea instancia del logger
const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.infoFile),
    new winston.transports.File(options.warnFile),
    new winston.transports.File(options.errorFile),
    new winston.transports.Console(options.console),
  ],
  exitOnError: false,
});

logger.stream = {
  write(message) {
    logger.info(message);
  },
};

export default logger;
