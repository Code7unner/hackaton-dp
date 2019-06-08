const express = require("express");
const router = express.Router();

const houseEventController = require("../houseEvents/houseEvents.controller");

// create house event for current location
router.post('/', houseEventController.add);
// get all events of current house
router.get('/', houseEventController.get);

module.exports = router;