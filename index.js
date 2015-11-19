var http = require('http');
var dispatch = require('dispatch');
var querystring = require('querystring');
//express 
var express = require('express');
var app = express(); //invoking express

//express middleware
var bodyParser = require('body-parser');



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
							res.json(movies);
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



// var server = http.createServer(
// 			dispatch ({
// 			'/movies' :{
// 				'GET /' : function(request,response,next){
// 							movies = [
// 							{
// 								title: 'Dangerous Arrangement',
// 								Category: ['Thriller', 'Drama','Mystery'],
// 								main_actors: [{
// 									first_name: 'Amy',
// 									last_name: 'Ellen'
// 								},{}]
// 							},
// 							{
// 								title: 'Scorpion',
// 								Category: ['Mystery','Drama','Thriller'],
// 								main_actors: [{
// 									first_name: 'Walter',
// 									last_name: 'Brien'
// 								},{
// 									first_name: 'Cape',
// 									last_name: 'Galloy'
// 								}]
// 							}


// 							]; 
// 							response.writeHead(200, {'Content-Type': 'application/json'})
							
// 							response.end(JSON.stringify(movies));
// 				},
// 				'POST /': function(request, response, next){
// 					//Get parameters from the form
// 					var formData ='';
// 					request.on('data', function(chunk){
// 						formData = querystring.parse(chunk.toString());
// 					});
					
// 					request.on('end', function(){
// 						console.log(formData);

					

// 					//create an instance of a movie
// 					var movie = new Movie(
// 					{
// 						title: formData.title,
// 						year_of_release: formData.year_of_release

// 					}
// 				);
					
// 					response.end();
// 					// console.log(movie);
					
// 					//save the movie instance
// 					//If successful respond with the saved movie instance
// 					});



					
// 					}


// 			}
	
// 			})
// );
	



app.listen(8081, function(){
console.log('Server running on 127.0.0.1:8081');
});























//create a schema
// var pizzaSchema = mongoose.Schema({
// 	name: String,
// 	price: Number,
// 	created_at: {type: Date, default: Date.now()}
// });

// //compile our model
// var Pizza = mongoose.model('Pizza', pizzaSchema);

// //using the model
// var pizza = new Pizza({name: 'Vegeterian', price: 1000});

// //create the document
// pizza.save(function(err, pizza){
// 	if (err){
// 		 return console.error('Your pizza was not saved', pizza);
// 	}
// 	console.log('Your pizza was successfully saved:)');

// });
