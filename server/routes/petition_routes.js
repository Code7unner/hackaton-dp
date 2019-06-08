const express = require("express");
const router = express.Router();
const passport = require('passport');

const auth = passport.authenticate('jwt', { session: false });

const petitionController = require("../petitions/petitions.controller");

// create petition for current location
router.post('/', petitionController.add);
// get list of petitions of current house
router.get('/', petitionController.get); 

module.exports = router;