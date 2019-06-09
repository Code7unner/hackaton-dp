const express = require("express");
const router = express.Router();
const passport = require('passport');

const auth = passport.authenticate('jwt', { session: false });

const offerController = require("../offers/offers.controller");

router.post('/', auth, offerController.create);

router.post('/rate/:offer_id', auth, offerController.rate);

router.post('/status/', auth, offerController.status);

router.get('/', auth, offerController.get);

router.get('/:id', auth, offerController.getByUserId);

router.get('/:type', auth, offerController.getByType);

module.exports = router;