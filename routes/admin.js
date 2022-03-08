const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authentication');

router.get('/', auth.isAdminOrEmployer , function(req, res){
	res.render('admin');
});

module.exports = router;