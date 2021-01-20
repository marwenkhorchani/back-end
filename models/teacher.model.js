const mongoose = require("mongoose");

var teacherSchema = new mongoose.Schema({
  email: { type: String },
  username: { type: String },
  password: { type: String },
  role: { type: String }
});


const TeacherModel = mongoose.model("teacher", teacherSchema);
module.exports = TeacherModel;
