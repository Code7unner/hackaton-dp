const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema model
const schema = new Schema({
    info: {type: String, required: true},
    user: {type: String},
    type: {type: String, enum: ['local', 'house', 'yard']},
    date: {type: Date, default: Date.now},
    status: {type: String, default: 'waiting'},
    rating: {type: Number},
    house: {type: String}
});

schema.set('toJSON', {virtuals: true});

// exporting the schema
module.exports = mongoose.model('Offer', schema);