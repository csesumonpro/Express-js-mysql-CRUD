
var express = require('express');
var path = require('path');

var indexRoutes = require('./routes/index');
var usersRoutes = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoutes);
app.use('/users', usersRoutes);

// error handler 404 Page
app.use((req,res,next)=>{
  res.status(404).render('404');
});

module.exports = app;
