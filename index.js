//express 
var express = require('express');
// var cors = require('express-cors');
var cons = require('consolidate');


//invoking express
var app = express();

// passport
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Router = require('router');


//express middleware
var bodyParser = require('body-parser');

// include mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/project-aardvark');
// express setting
app.engine('html', cons.liquid);
app.set('views', './views');
app.set('view engine', 'html');

// epress middleware
app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressSession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(Router);

// include routes
var moviesRoutes = require('./routes/movies');
var usersRoutes = require('./routes/users');
app.use(moviesRoutes);
app.use(usersRoutes);

// passport config
var User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.listen(8081, function() {
    console.log('Server running on 127.0.0.1:8081');
});
