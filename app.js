var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Require all routers
var indexRouter = require('./routes/index');
var appointmentFormRouter = require('./routes/appointmentform');
var doctorRouter = require('./routes/doctor');
var listRouter = require('./routes/list');
var modifyRouter = require('./routes/modify');
var modifypatientRouter = require('./routes/modifypatient');
var patientFormRouter = require('./routes/patientform');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Register routers for certain URL path prefixes
app.use('/', indexRouter);
app.use('/appointmentform', appointmentFormRouter);
app.use('/doctor', doctorRouter);
app.use('/list', listRouter);
app.use('/modify', modifyRouter);
app.use('/modifypatient', modifypatientRouter)
app.use('/patientform', patientFormRouter);

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
