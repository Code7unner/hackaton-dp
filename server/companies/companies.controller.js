const express = require('express'),
	app = express()

const db = require('../_helpers/db'),
	Company = db.Company,
	Location = db.Location

function add(req, res) {
	const address = {
		city: req.body.city,
		street: req.body.street, 
		house: req.body.house
	}

	Location.findOne(address)
		.then(data => {
			if (!data) {
				return res.status(404).json('There is no such address');
			} else {
				new Company({
					name: req.body.name,
					house: data._id
				})
					.save()
					.then(result => res.json(result))
					.catch(err => res.json(err))
			}
		})
		.catch(err => res.json(err))
}

function get(req, res) {
	Company.find({})
		.populate('house')
		.exec((err, data) => {
			if (err || !data) {
				return res.status(404).json('Error', err);
			} else {
				return res.json(data);
			}
		})
}

//Exporting all the functions
module.exports = {
	add,
	get
};