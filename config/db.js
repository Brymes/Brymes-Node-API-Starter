const mongoose = require('mongoose');
require("dotenv").config();
const { MONGOLAB_URI, API_PORT } = process.env;

mongoose.Promise = global.Promise;

try {
  //mongoose .connect('mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb', {
    mongoose.connect(MONGOLAB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
} catch (err) {
  throw err;
}

mongoose.connection.on("connected", () => {
  console.log(`connected to database`);
});

// To Remove moongoose deprecation warnings
mongoose.set("useFindAndModify", true);
mongoose.set("useCreateIndex", true);
