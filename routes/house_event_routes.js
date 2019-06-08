const express = require("express");
const router = express.Router();
const passport = require('passport');

const auth = passport.authenticate('jwt', { session: false });

const houseEventController = require("../houseEvents/houseEvents.controller");

// create house event for current location
router.post('/', auth, houseEventController.create);
// get all events of current house
router.get('/:id', houseEventController.get);

module.exports = router;