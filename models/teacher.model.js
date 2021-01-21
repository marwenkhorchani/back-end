const mongoose = require("mongoose");
const teacherSchema = new mongoose.Schema({
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

const teacherModel = mongoose.model("teacher", teacherSchema);

module.exports = teacherModel;
