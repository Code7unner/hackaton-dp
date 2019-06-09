const express = require('express');
const app = express();

const db = require('../_helpers/db');
const Offer = db.Offer;
const Location = db.Location;

function create(req, res) {
    Location.findOne({user: req.params.id})
        .then(location => {
            if (!location) {
                return res.status(404).json('Location not found')
            } else {
                new Offer({
                    user: req.params.id,
					info: req.body.info,
					house: location._id,
                    type: req.body.type
                })
                    .save()
                    .then(() => res.sendStatus(200))
            }
        })
        .catch(err => console.log(err))
}

function rate(req, res) {
    Offer.findOneAndUpdate({'_id': req.params.offer_id}, {rating: req.body.rating})
        .catch(err => console.log(err))
}

function status(req, res) {
    Offer.findByIdAndUpdate({'_id': req.params.offer_id}, {status: req.body.status})
        .catch(err => console.log(err))
}

function get(req, res) {
    Offer.find({})
        .populate('house')
        .exec((err, data) => {
            if (err || !data) {
				return res.status(404).json('Error', err);
			} else {
				return res.json(data);
			}
        })
}

function getByUserId(req, res) {
    Offer.find({user: req.params.id})
        .then(offer => {
            if (!offer) {
                return res.status(404).json('Offer not found');
            } else {
                return res.json(offer);
            }
        })
        .catch(err => console.log(err))
}

function getByType(req, res) {
    Offer.find({type: req.params.type})
        .then(offer => {
            if (!offer) {
                return res.status(404).json('Offer not found');
            } else {
                return res.json(offer);
            }
        })
        .catch(err => console.log(err))
}

function stats(req, res) {
    console.log('offer')
    Offer.find({})
        .then(offer => {
            let stats = {
                offerCount: 0,
                acceptedOffers: 0,
                rejectedOffers:0,
                complitedOffers: 0,
                awerageRate: 0,
                waitingOffers: 0,
                ratedOffers: 0,
                awerageReponceTime: 3,
                capFondRepair: 999542
            }

            offer.forEach(item => {
                stats.offerCount++
                if (item.status == 'rejected') stats.rejectedOffers++
                if (item.status == 'working') stats.acceptedOffers++
                if (item.status == 'complited') {
                    stats.complitedOffer++
                    stats.acceptedOffers++
                    if (item.rate) {
                        stats.awerageRate += item.rate 
                        stats.ratedOffers ++
                    }
                }
                if (item.status == 'waiting') stats.waitingOffers++
            })
            if (stats.ratedOffers > 0)
                stats.awerageRate /= stats.ratedOffers
            else 
                stats.awerageRate = 0
            
            return res.json(stats)
        })
        .catch(err => console.log(err))
}

//Exporting all the functions
module.exports = {
    create,
    rate,
    status,
    get,
    getByUserId,
    getByType,
    stats
};