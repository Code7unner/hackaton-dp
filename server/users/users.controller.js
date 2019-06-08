const cookieparser = require('cookie-parser'),
	express = require('express'),
	app = express(),
	async = require('async'),
	crypto = require('crypto'),
    algorithm = 'aes-256-cbc';
    
app.use(cookieparser());

async function test(req, res) {
    await res
        .status(200)
        .json("Test user route")
}

//Exporting all the functions
module.exports = {
	test
};