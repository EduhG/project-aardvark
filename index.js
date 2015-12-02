
//express 
var express = require('express');
var cors = require('express-cors')

//invoking express
var app = express(); 

//express middleware
var bodyParser = require('body-parser');

 
app.use(cors({
    allowedOrigins: [
        '127.0.0.1:8080'
    ]
}));


//include mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/terrific-tuesday');
//define our schema
var movieSchema = mongoose.Schema({
	name: String,
	year_of_release: Number
})

// compile our model
var Movie = mongoose.model('Movie', movieSchema);
app.use(bodyParser.urlencoded({extended: true}));


app.get('/movies',function(req, res){
	
							movies = [
							{
								title: 'Dangerous Arrangement',
								Category: ['Thriller', 'Drama','Mystery'],
								main_actors: [{
									first_name: 'Amy',
									last_name: 'Ellen'
								},{}]
							},
							{
								title: 'Scorpion',
								Category: ['Mystery','Drama','Thriller'],
								main_actors: [{
									first_name: 'Walter',
									last_name: 'Brien'
								},{
									first_name: 'Cape',
									last_name: 'Galloy'
								}]
							}


							]; 
							res.redirect('http://www.google.com');
							// res.json(movies);
						});







app.post('/movies', function(req, res){
	console.log(req.body);
	formData = req.body;
	var movie = new Movie(
					{
						title: formData.title,
						year_of_release: formData.year_of_release

					}
				);
	var movie = new Movie(formData);
	movie.save(function(err, movie){

	});

});

app.listen(8081, function(){
console.log('Server running on 127.0.0.1:8081');
});