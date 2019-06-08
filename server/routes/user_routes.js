const express = require("express");
const router = express.Router();
const passport = require('passport');

const auth = passport.authenticate('jwt', { session: false });

const userController = require("../users/users.controller");

// create user
router.post('/register', userController.register);
// login user
router.post('/login', userController.login);
// current user
router.get('/current', auth, userController.current);

module.exports = router;