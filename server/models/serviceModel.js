const mongoose = require("mongoose");

const serviceModel = new mongoose.Schema({
  serviceType: {
    type: String,
  },
  description: {
    type: String,
  },
  warranty: {
    type: String,
  },
  duration: {
    type: String,
  },
  price:{
      type: Number,
    }
});

module.exports = mongoose.model("service", serviceModel);