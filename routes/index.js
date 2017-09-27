var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/', autenticationltlogin, function(req, res){
	res.render('index');
});

function autenticationltlogin(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		res.redirect('/autentication/login');
	}
}

module.exports = router;