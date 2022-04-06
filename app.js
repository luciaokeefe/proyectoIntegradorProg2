var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var headerLogueadoRouter = require('./routes/headerLogueado')
var loginRouter = require('./routes/login');
var productAddRouter = require('./routes/productAdd');
var productRouter = require('./routes/product');
var profileEditRouter = require('./routes/profileEdit');
var registerRouter = require('./routes/register');
var searchResultsRouter = require('./routes/searchResults');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/headerLogueado', headerLogueadoRouter);
app.use('/login', loginRouter);
app.use('/productAdd', productAddRouter);
app.use('/product', productRouter);
app.use('/profileEdit', profileEditRouter);
app.use('/register', registerRouter);
app.use('/searchResults', searchResultsRouter);


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
