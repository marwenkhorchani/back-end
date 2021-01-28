const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  text: String,
  isDone: Boolean
});

const TaskModel = mongoose.model("task", taskSchema);

module.exports = TaskModel;
