const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema model
const schema = new Schema({
	house: {type: Schema.Types.ObjectId, ref: 'Location'},
	type: {type: String, required: true},
	date: {type: Date, default: Date.now}
});

schema.set('toJSON', {virtuals: true});

// exporting the schema
module.exports = mongoose.model('HouseEvents', schema);