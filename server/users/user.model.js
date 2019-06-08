const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema model
const schema = new Schema({
    username: {type: String, required: true},
	name: {type: String, required: true},
	lastname: {type: String, required: true},
	username: {type: String, required: true},
	password: {type: String, required: true},
    role: {
        type: String,
        enum: ['Житель', 'Управляющая компания', 'Управляющий'],
        default: 'Житель'
    }
});

schema.set('toJSON', {virtuals: true});

// exporting the schema
module.exports = mongoose.model('User', schema);