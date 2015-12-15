var express = require('express');
// var path = require('path');
var router = express.Router();
// var router = require('express').Router();

var Movie = require('../models/movie');

router.route('/movies')
    .get(function(req, res) {

        Movie.find()
            .select('title  year_of_release  rating')
            .exec(function(err, movies) {
                if (err) {
                    console.log(err);
                }
                 else {
                    // res.redirect('movies');
                    res.render('movies/index', {
                       "movies": movies,
                       'user': req.logout
                    });
                    // res.json(movies);
                }
            });
    })
    .post(function(req, res) {
        // console.log(req.body);
        formData = req.body;

        var movie = new Movie(formData);
        movie.save(function(err, movie) {
            if (err) {
                console.log(err);
            } else {
                console.log('successfully saved the movie');
                res.redirect('/movies');
            }

        });
    });


router.route('/movies/new')
    .get(function(req, res) {
        res.render('/movies/new');
    });

function updateMovie(method, req, res) {
    movieId = req.params.id;
    userRating = req.body.rating;
    userTitle = req.body.title;
    userYearOfRelease = req.body.year_of_release;
    // movieDetails = req.body.details;
    // retrieve movie from Mongodb
    Movie.findById(movieId, function(err, movie) {
        if (err) return console.log(err);

        movie.rating = userRating;
        movie.title = userTitle;
        movie.year_of_release = userYearOfRelease;
        movie.save(function(err, movie) {
            if (err) return console.log(err);
            if (method === 'PUT') {
                res.json(movie);
            } else {
                res.redirect('/movies/' + movie._id);
            };


        });

    });

}

function deleteMovie(method, req, res) {
    movieId = req.params.id;

    Movie.remove({
        _id: movieId
    }, function(err) {
        if (err) return console.log(err);
        if (method === 'GET') {
            res.redirect('/movies');
            console.log("You have deleted a movie");
        } else {
            res.send("Movie was deleted");
        }

    });
};


router.route('/movies/:id')
    .get(function(req, res) {
        movieId = req.params.id;
        // retrieve movie from Mongodb
        Movie.findById(movieId, function(err, movie) {
            if (err) return console.log(err);
            // res.json(movie);
            res.render('movies/detail', {
                "movie": movie
            });

        });
    })
    .put(function(req, res) {
        updateMovie('PUT', req, res);
        console.log("Movie has been updated now");
    })
    .delete(function(req, res) {
        deleteMovie('DELETE', req, res);
    });


router.route('/movies/:id/edit')
    .get(function(req, res) {
        movieId = req.params.id;
        // retrieve movie from Mongodb
        Movie.findById(movieId, function(err, movie) {
            if (err) return console.log(err);
            // res.json(movie);
            res.render('movies/edit', {
                "movie": movie
            });
        });
    })
    .post(function(req, res) {
        updateMovie('POST', req, res);
    });


router.route('/movies/:id/delete')
    .get(function(req, res) {
        deleteMovie('GET', req, res);
    });

module.exports = router;