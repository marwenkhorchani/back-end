const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
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
  }
});

const studentModel = mongoose.model("student", studentSchema);

module.exports = studentModel;
