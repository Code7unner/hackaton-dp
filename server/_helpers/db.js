const mongoose = require("mongoose");

const keysDb = require('../dbConfig/keys').mongoURI;

mongoose
  .connect(keysDb)
  .then(() => console.log('MongoDb connected'))
  .catch(err => console.log(err));