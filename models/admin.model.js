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
  }
});

const adminModel = mongoose.model("admin", adminSchema);

module.exports = adminModel;
