//include mongoose
var mongoose = require('mongoose');
// var app = express();
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
//define our schema
var movieSchema = mongoose.Schema({
    title: String,
    year_of_release: Number,
    rating:{type: Number, default: 0, min: 0, max: 10},
    details: String
});

// compile our model
module.exports = mongoose.model('Movie', movieSchema);