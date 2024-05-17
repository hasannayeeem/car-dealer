const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  img: {
      type: String,
  },
  name: {
      type: String,
  },
  description: {
      type: String,
  },
  price: {
      type: Number,
  },
  year: {
      type: Number,
  },
  type: {
      type: String,
      enum: ['New', 'Used'],
  },
  location: {
      type: String,
  },
  quantity: {
      type: Number,
  },
  supplierName: {
      type: String,
  }
});
module.exports = mongoose.model("inventory", inventorySchema);

