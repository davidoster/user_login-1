module.exports = {
	isAuthenticated : function(req, res, next) {
		if(req.isAuthenticated()) {
			next();
		}
		res.redirect('/login');
	},

	isAdminOrEmployer: function(req, res, next) {
		if(req.isAuthenticated() && checkRoles(req._passport.session.user, [1,2])) {
		//if(req._passport.session?.user != null && checkRoles(req._passport.session.user, [1,2])){
			next();
		}
		res.redirect('/');
	}
}

function checkRoles(email, roles = []) {
	// check from the db about this email and these roles
	return true;
}