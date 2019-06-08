const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema model
const schema = new Schema({
	user: {type: Schema.Types.ObjectId, ref: 'User'},
	text: {type: String, required: true},
	name: {type: String, default: 'Noname'},
	date: {type: Date, default: Date.now},
	likes: [{
		user: {type: Schema.Types.ObjectId, ref: 'User'}
	}],
	comments: [{
		user: {type: Schema.Types.ObjectId, ref: 'User'},
		text: {type: String, required: true},
		name: {type: String, default: 'Noname'},
		date: {type: Date, default: Date.now}
	}]
});

schema.set('toJSON', {virtuals: true});

// exporting the schema
module.exports = mongoose.model('Post', schema);