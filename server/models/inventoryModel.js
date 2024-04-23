const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  img: {
      type: String,
      required: true
  },
  name: {
      type: String,
      required: true
  },
  description: {
      type: String,
      required: true
  },
  price: {
      type: Number,
      required: true
  },
  year: {
      type: Number,
      required: true
  },
  type: {
      type: String,
      enum: ['New', 'Used'],
      required: true
  },
  location: {
      type: String,
      required: true
  },
  quantity: {
      type: Number,
      required: true
  },
  supplierName: {
      type: String,
      required: true
  }
});
module.exports = mongoose.model("inventory", inventorySchema);

