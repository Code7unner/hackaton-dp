const express = require('express'),
	app = express()

const db = require('../_helpers/db'),
	Location = db.Location,
	Petition = db.Petition

function add(req, res) {
	const address = {
		city: req.body.city,
		street: req.body.street, 
		house: req.body.house
	}

	Location.findOne(address)
		.then(data => {
			console.log("data:", data);
			if (!data) {
				return res.status(404).json('There is no such address');
			} else {
				new Petition({
					house: data._id,
					info: req.body.info
				})
					.save()
					.then(result => res.json(result))
					.catch(err => res.json(err))
			}
		})
}

function get(req, res) {
	Petition.find({})
		.populate('inmate')
		.exec((err, data) => {
			if (err || !data) {
				return res.status(404).json('Error', err);
			} else {
				return res.json(data)
			}
		})
}

//Exporting all the functions
module.exports = {
	add,
	get
};