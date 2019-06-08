const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema model
const schema = new Schema({
	house: {type: Schema.Types.ObjectId, ref: 'Location'},
	name: {type: String, required: true},
	reviews: [{
		user: {type: Schema.Types.ObjectId, ref: 'User'},
		text: {type: String, required: true, default: 'Все хорошо'},
		name: {type: String, default: 'Noname'},
		date: {type: Date, default: Date.now}
	}],
	likes: [{
		user: {type: Schema.Types.ObjectId, ref: 'User'}
	}],
});

schema.set('toJSON', {virtuals: true});

// exporting the schema
module.exports = mongoose.model('Company', schema);