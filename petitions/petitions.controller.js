const express = require('express');
const app = express();

const db = require('../_helpers/db');
const Location = db.Location;
const Petition = db.Petition;

function create(req, res) {
	Location.findOne({user: req.user.id})
		.then(data => {
			if (!data) {
				return res.status(404).json('There is no such address');
			} else {
				new Petition({
					user: req.user.id,
					house: data._id,
					info: req.body.info,
					counts: req.body.counts
				})
					.save()
					.then(result => res.json(result))
					.catch(err => console.log(err))
			}
		})
}

function get(req, res) {
	Petition.find({user: req.params.id})
		.populate('house')
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
	create,
	get
};