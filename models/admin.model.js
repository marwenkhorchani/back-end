const mongoose = require("mongoose");

var adminSchema = new mongoose.Schema({
  email: { type: String },
  username: { type: String },
  password: { type: String },
  role: { type: String }
});

const AdminModel = mongoose.model("admin", adminSchema);

module.exports = AdminModel;
