// models/Item.js
const mongoose = require('mongoose');

console.log("This is model class");
const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Item', ItemSchema, 'first_collection');
    