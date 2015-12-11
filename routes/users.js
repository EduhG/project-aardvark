var express = require('express');
var router = express.Router();

var Movie = require('../models/user');

router.route('/sign-up')
		.get(function(req, res){
			res.render('users/sign-up');
		})
	    // .post(function(req, res) {
	    //     var username = req.body.username;
	    //     var password = req.body.password;
	    //     res.json(
	    //         { 
	    //            message: 'signup success',
	    //             username : username,
	    //              password : password,
	    //         }
	    //     );
	    // });
   
module.exports = router;