const { ObjectId } = require("mongoose");
const mongoose = require("mongoose");
const timestamp = require("mongoose-timestamp");

const FoodsSchema = new mongoose.Schema({
  //add requirements
  name: {
    type: String,
    required: true,
    default: "",
  },

  calories: {
    type: Number,
    required: true,
  },

  date: {
    type: Date,
    required: true,
    default: "",
  },

  size: {
    type: Number,
    required: true,
  },

  picture: {
    type: GridFs,
    required: true,
  },
});
FoodsSchema.plugin(timestamp);

const Foods = mongoose.model("Foods", FoodsSchema);
module.exports = Users;
