
//express 
var express = require('express');
var cors = require('express-cors')

//invoking express
var app = express(); 

//express middleware
var bodyParser = require('body-parser');

//include mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/project-aardvark');
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });
//define our schema
var movieSchema = mongoose.Schema({
	title: String,
	year_of_release: Number
});

// compile our model
var Movie = mongoose.model('Movie', movieSchema);
app.use(bodyParser.urlencoded({extended: true}));


app.get('/movies',function(req, res){
	
		Movie.find(function(err, movie){
			if(err){
				console.log(err);
			}else{
								// res.redirect('movies');
								res.json(movie);
							}
		});
	});

app.post('/movies/new', function(req, res){
	console.log(req.body);
	formData = req.body;

	var movie = new Movie(formData);
	movie.save(function(err, movie){
		if(err){
			console.log(err);
		}else {
			console.log('successfully saved the movie');
			res.redirect('/movies');
		}

		});
	});
app.get('/movies/:id', function(req, res) {
  movieId = req.params.id;
// retrieve movie from Mongo
Movie.findById(movieId, function (err, movie) {
	if (err) return console.log(err);
	res.json(movie);
	});

});

app.listen(8081, function(){
console.log('Server running on 127.0.0.1:8081');
});
