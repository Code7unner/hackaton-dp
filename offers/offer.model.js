const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema model
const schema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    info: {type: String, required: true},
    type: {type: String, enum: ['local', 'house', 'yard']},
    date: {type: Date, default: Date.now},
    status: {type: String, default: 'waiting'},
    rating: {type: Number},
    house: {type: Schema.Types.ObjectId, ref: 'Location'}
});

schema.set('toJSON', {virtuals: true});

// exporting the schema
module.exports = mongoose.model('Offer', schema);