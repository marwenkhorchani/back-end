const mongoose = require("mongoose");
const ActivitySchema = new mongoose.Schema({
  acitvityName: {
    type: String
  },
  date: {
    type: date
  },
  hour: {
    type: String
  },
  student: [
    {
      sid: mongoose.Schema.Types.ObjectId,
      ref: "student"
    }
  ]
});

const ActivityModel = mongoose.model("Activity", ActivitySchema);

module.exports = ActivityModel;
