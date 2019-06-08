const cookieparser = require('cookie-parser'),
	express = require('express'),
	app = express()

const db = require('../_helpers/db'),
	User = db.User;
    
app.use(cookieparser());

// middleware function to check for logged in users
let sessionChecker = (req, res, next) => {
	if (req.cookies.user_sid) {
		res.json({ status: true });
	} else {
		next();
	}
};

// middleware for checking if the cookie information is saved or not
app.use((req, res, next) => {
	if (req.cookies.user_sid && !req.session.user) {
		res.clearCookie('user_sid');
	}
	next();
});

function add(req, res) {
	User.findOne({username: req.body.username})
		.then(data => {
			if (data) {
				return res.status(400).json("The username already exists - change it, please");
			} else {
				new User({
					name: req.body.name,
					lastname: req.body.lastname,
					username: req.body.username,
					password: req.body.password
				})
					.save()
					.then(result => res.json(result))
					.catch(err => res.json(err))
			}
		})
}

//Exporting all the functions
module.exports = {
	add
};