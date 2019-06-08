const express = require("express");
const router = express.Router();

const userController = require("../users/users.controller");

// create user
router.post('/', userController.add);

module.exports = router;