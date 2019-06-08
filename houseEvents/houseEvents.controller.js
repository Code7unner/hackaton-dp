const express = require('express');
const app = express();

const db = require('../_helpers/db');
const Location = db.Location;
const HouseEvent = db.HouseEvent;

function create(req, res) {
	Location.findOne({user: req.user.id})
		.then(location => {
			if (!location) {
				return res.status(404).json('There is no such address');
			} else {
				new HouseEvent({
					user: req.user.id,
					info: req.body.info,
					house: location._id,
					type: req.body.type
				})
					.save()
					.then(result => res.json(result))
					.catch(err => res.json(err))
			}
		})
}

function get(req, res) {
	HouseEvent.find({user: req.params.id})
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