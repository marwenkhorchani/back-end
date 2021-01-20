const mongoose = require("mongoose");
const announcementSchema = new mongoose.Schema({
  username: {
    type: String
  }
});

const AnnouncementModel = mongoose.model("announcement", announcementSchema);

module.exports = AnnouncementModel;
