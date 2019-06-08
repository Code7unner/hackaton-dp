const express = require("express");
const router = express.Router();
const passport = require('passport');

const auth = passport.authenticate('jwt', { session: false });

const locationController = require("../locations/locations.controller");

// create location for current user
router.post('/', auth, locationController.create);

module.exports = router;