const express = require("express");
const router = express.Router();

const companyController = require("../companies/companies.controller");

// create company for current location
router.post('/', companyController.add);
// get company info for current location
router.get('/', companyController.get);

module.exports = router;