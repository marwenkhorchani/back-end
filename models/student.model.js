const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
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
  img: {
    type: String
  },
  birthday: {
    type: Date
  },
  class: {
    type: String
  },
  level: {
    type: String
  },
  phone: {
    type: Number
  }
});

const studentModel = mongoose.model("student", studentSchema);

module.exports = studentModel;
