const express = require("express");
const router = express.Router();
const passport = require('passport');

const auth = passport.authenticate('jwt', { session: false });

const offerController = require("../offers/offers.controller");

router.get('/statistic', offerController.stats);

router.post('/:id', offerController.create);

router.post('/rate/:offer_id', offerController.rate);

router.post('/status/', offerController.status);

router.get('/', offerController.get);

router.get('/:id', offerController.getByUserId);

router.get('/:type', offerController.getByType);


module.exports = router;