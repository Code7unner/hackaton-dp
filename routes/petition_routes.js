const express = require("express");
const router = express.Router();
const passport = require('passport');

const auth = passport.authenticate('jwt', { session: false });

const petitionController = require("../petitions/petitions.controller");

// create petition for current location
router.post('/', auth, petitionController.create);
// get list of petitions of current house
router.get('/:id', petitionController.get);
// change state of petition (voting)
router.pull('/:petition_id', petitionController.vote);
// // change state of petition (unvoting)
router.delete('/:petition_id', petitionController.unvote);

module.exports = router;