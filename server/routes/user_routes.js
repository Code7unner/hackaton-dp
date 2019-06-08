const express = require("express");
const router = express.Router();

const userController = require("../users/users.controller");

// test route
router.get('/test', userController.test);

module.exports = router;