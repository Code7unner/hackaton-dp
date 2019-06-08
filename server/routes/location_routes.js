const express = require("express");
const router = express.Router();

const locationController = require("../locations/locations.controller");

// create location for current user
router.post('/', locationController.add);

module.exports = router;