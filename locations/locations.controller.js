const express = require('express');
const app = express();

const db = require('../_helpers/db');
const Location = db.Location;
const User = db.User;

function create(req, res) {
	Location.findOne({user: req.user.id})
		.then(location => {
			if (location) {
				return res.status(400).json('That location already exists')
			} else {
				new Location({
					country: req.body.country,
					city: req.body.city,
					street: req.body.street,
					house: req.body.house,
					apartment: req.body.apartment,
					user: req.user.id
				})
					.save()
					.then(result => res.json(result))
			}
		})
		.catch(er => res.json(err))	
}

//Exporting all the functions
module.exports = {
	create
};