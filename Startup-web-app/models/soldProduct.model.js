const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const soldProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    min: 0,
    default: 0
  },
  soldTo: {
    type: String,
    required: false,
    default: "SELF"
  }
});

module.exports = mongoose.model("soldProduct", soldProductSchema);
