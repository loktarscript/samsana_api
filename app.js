var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var usuariosRouter = require('./routes/usuarios');
var authRouter = require('./routes/auth');
var areaResponsableRouter = require('./routes/seguridad/area_responsable');
var categoriaTicketRouter = require('./routes/diccionarios/categoria_ticket');
var permisosRouter = require('./routes/seguridad/permisos');
var grupoRouter = require('./routes/seguridad/grupo');
var rolUsuarioRouter = require('./routes/seguridad/permisos');
var reportesRouter = require('./routes/reportes/userReport');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
var db = require('./src/db');
var config = require('./src/config');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
db(config.database.URL);

//Rutas
app.use('/usuarios', usuariosRouter);
app.use('/auth', authRouter);
app.use('/area_responsable', areaResponsableRouter);
app.use('/categoria_ticket', categoriaTicketRouter);
app.use('/permisos', permisosRouter);
app.use('/grupo', grupoRouter);
app.use('/rol_usuario', rolUsuarioRouter)
app.use('/reportes', reportesRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
