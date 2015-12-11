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


//express middleware
var bodyParser = require('body-parser');

// express setting
app.engine('html', cons.liquid);
app.set('views', './views');
app.set('view engine', 'html');

// epress middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// include routes
var routes = require('./routes/movies');
console.log(routes);
app.use(routes);

app.listen(8081, function() {
    console.log('Server running on 127.0.0.1:8081');
});
