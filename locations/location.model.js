const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema model
const schema = new Schema({
	country: {type: String, required: true, default: 'Russia'},
	city: {type: String, required: true},
	street: {type: String, required: true},
	house: {type: String, required: true},
	apartment: {type: String, required: true},
	user: {type: Schema.Types.ObjectId, ref: 'User'}
});

schema.set('toJSON', {virtuals: true});

// exporting the schema
module.exports = mongoose.model('Location', schema);