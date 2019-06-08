const express = require('express'),
	app = express()

const db = require('../_helpers/db'),
	User = db.User,
	Location = db.Location

function add(req, res) {
	User.findOne({username: req.body.username})
		.then(data => {
			if (!data) {
				return res.status(404).json('No such user');
			} else {
				new Location({
					country: req.body.country,
					city: req.body.city,
					street: req.body.street,
					house: req.body.house,
					apartment: req.body.apartment,
					inmate: data._id
				})
					.save()
					.then(result => res.json(result))
					.catch(err => res.json(err));
			}
		})
		.catch(err => res.json(err))
}

//Exporting all the functions
module.exports = {
	add
};