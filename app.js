var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const expressSession = require('express-session');
const passport = require('passport');

const User = require('./routes/users');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// Set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Session config
app.use(expressSession({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

// Passport config
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404, 'Page not found'));
});

// Error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);

  if (req.xhr || req.headers.accept.indexOf('json') > -1) {
    res.json({
      message: err.message,
      error: req.app.get('env') === 'development' ? err : {}
    });
  } else {
    try {
      res.render('error', {
        message: err.message,
        error: req.app.get('env') === 'development' ? err : {}
      });
    } catch (renderError) {
      res.type('text').send(err.message);
    }
  }
});

module.exports = app;
