const mongoose = require("mongoose");

const keysDb = require('../dbConfig/keys').mongoURI;

mongoose
  .connect(keysDb)
  .then(() => console.log('MongoDb connected'))
  .catch(err => console.log(err));

module.exports = {
	User: require('../users/user.model'),
	Location: require('../locations/location.model'),
	HouseEvent: require('../houseEvents/houseEvent.model'),
	Petition: require('../petitions/petition.model'),
	Post: require('../posts/post.model'),
	Company: require('../companies/company.model'),
	Offer: require('../offers/offer.model')
};