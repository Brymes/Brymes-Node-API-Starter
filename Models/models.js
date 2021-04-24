const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const customerSchema = new mongoose.Schema({
  isActive: { type: Boolean, default: true },
  // timeActive: {type: }
},
  { timestamps: true });

module.exports = mongoose.model('customer', customerSchema);