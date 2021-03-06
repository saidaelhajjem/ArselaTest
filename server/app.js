var createError = require('http-errors');
var express = require('express');
var cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const connectDB = require("./config/db");
const config = require("config");
var pagesRouter = require('./routes/pages');
var typeRouter = require('./routes/typeRouter');
var formRouter = require('./routes/formRouter');
var roleRouter = require('./routes/roleRouter');
var user = require('./routes/userRouter');
var userFormRouter = require('./routes/userFormRouter');

var indexRouter = require('./routes/index');

var app = express();
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Connect Database
connectDB();
app.set("secretKey", "Arsela");
app.use('/', indexRouter);
app.use("/pages", pagesRouter);
app.use("/types", typeRouter);
app.use("/forms", formRouter);
app.use("/roles", roleRouter);
app.use("/user", user);
app.use("/userForms",userFormRouter );


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
