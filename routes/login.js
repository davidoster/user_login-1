const express = require('express');
const router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index');
});

router.post(
	'/validate', 
	passport.authenticate('local', { failureRedirect: '/' }),
	function(req, res) {
		// console.log(req);
		res.render('home');
	});

module.exports = router;
