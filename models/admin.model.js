const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  username: {
    type: String
  },
  parssword: {
    type: String
  },
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  img: {
    type: String
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  cin: {
    type: Number,
    unique: true,
    required: true
  },
  phone: {
    type: Number
  },
  birthday: {
    type: Date
  },
});

const adminModel = mongoose.model("admin", adminSchema);

module.exports = adminModel;

