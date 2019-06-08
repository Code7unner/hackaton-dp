const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema model
const schema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
	house: {type: Schema.Types.ObjectId, ref: 'Location'},
	info: {type: String, required: true},
    counts: {type: Number, required: true, min: 0, max: 120},
	date: {type: Date, default: Date.now}
});

schema.set('toJSON', {virtuals: true});

// exporting the schema
module.exports = mongoose.model('Petition', schema);