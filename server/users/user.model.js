const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema model
const schema = new Schema({
	name: {type: String, required: true},
	lastname: {type: String, required: true},
	username: {type: String, required: true},
	password: {type: String, required: true}
});

schema.set('toJSON', {virtuals: true});

// exporting the schema
module.exports = mongoose.model('User', schema);