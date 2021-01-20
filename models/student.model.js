const mongoose = require("mongoose");

var studentSchema = new mongoose.Schema({
  email: { type: String },
  username: { type: String },
  password: { type: String },
  role: { type: String }
});
const StudentModel = mongoose.model("student", studentSchema);

module.exports = StudentModel;
