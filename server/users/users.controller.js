const express = require('express');
const app = express();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../dbConfig/keys');
const passport = require('passport');

const db = require('../_helpers/db');
const User = db.User;

function register(req, res) {
	User.findOne({username: req.body.username})
		.then(user => {
			if (user) {
				return res.status(400).json("The username already exists - change it, please");
			} else {
				const newUser = new User({
					username: req.body.username,
					name: req.body.name,
					lastname: req.body.lastname,
					password: req.body.password,
					role: req.body.role
				});

				bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    });
                });
			}
		})
}

function login(req, res) {
	const username = req.body.username;
	const password = req.body.password;

	User.findOne({username})
		.then(user => {
			if (!user) {
				return res.status(404).json('User not found');
			} else {
				bcrypt.compare(password, user.password)
	                .then(isMatch => {
	                    if(isMatch) {
	                        //User matched
	                        const payload = { id: user.id, name: user.name };
	                        //Sign token
	                        jwt.sign(
	                            payload,
	                            keys.secretOrKey,
	                            { expiresIn: 36000 },
	                            (err, token) => {
	                                res.json({
	                                    success: true,
	                                    token: 'Bearer ' + token
	                                })
	                            }
	                        );
	                    } else {
	                        return res.status(400).json('Password incorrect');
	                    }
	                })
			}
		})
}

function current(req, res) {
	res.json({
        username: req.user.username,
		name: req.user.name,
		lastname: req.user.lastname,
		username: req.user.username,
		password: req.user.password,
		role: req.user.role
    });
}

//Exporting all the functions
module.exports = {
	register,
	login, 
	current
};