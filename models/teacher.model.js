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
  },
  img: {
    type: String
  },
  cin: {
    type: Number
  },
  phone: {
    type: Number
  },
  birthday: {
    type: Date
  },
  classes: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "class"
      }
    }
  ]
});

const teacherModel = mongoose.model("teacher", teacherSchema);

module.exports = teacherModel;
