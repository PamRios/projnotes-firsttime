//helps  to handle http errors
import createError from 'http-errors';
// import the Express Librari
import express from 'express';
// is a Core-Node library to manage systems paths
import path from'path';
// helps to parse client cookies
import cookieParser from 'cookie-parser';
//library to log  http comunication
import logger from 'morgan';

//importing sub routes
import indexRouter from './routes/index';
import usersRouter from './routes/users';
import apiRouter from './routes/api';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
 //USE == REGISTERING MIDDLEWARE
//app es una instancia de express
app.use(logger('dev')); // log all received request //constructores de funciones -> generan funciones (req, res)
/*app.use((req, res, next)=>{
  //res.send("PÁGINA FUERA DE SERVICCIO");
  console.log("A request has been / Se ha recibido una petición");
  next();
}); // no se ejecutan los demás middleware por que el primero ya contesto, los middleware sí llevan orden de ejecución
app.use((req, res, next)=>{
  console.log(`🔑 IP: ${req.ip}`);
  next();
})*/
app.use(express.json());  //Parse request data into json
app.use(express.urlencoded({ extended: false })); //decode url info
app.use(cookieParser()); //Parse client cookies into json
//Set up the static file server
app.use(express.static(/*ruta de los estaticos*/path.join(__dirname, 'public'))); //path para que sirva en diferentes

//Registering routes
app.use('/', indexRouter);
app.use/*metodo*/('/users', usersRouter); //Use permite definir un tramo de ruta
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use((req, res, next) =>{
  next(createError(404));
});

// error handler
app.use ((err, req, res, next) =>{
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//module.exports = app;
export default app;
