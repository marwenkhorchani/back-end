module.exports = new (class TeachertService {
  constructor() {
    this.teacher = require("../models/teacher.model.js");
  }
  getTeacher() {
    return this.teacher.find();
  }
  deleteTeacherById({ _id }) {
    return this.teacher.findByIdAndDelete(_id);
  }
  updateTeacherById(_id, payload) {
    return this.teacher.findByIdAndUpdate(_id, payload);
  }
  getTeacherById({ _id }) {
    return this.teacher.findById(_id);
  }
  addTeacher(payload) {
    return this.teacher.create(payload);
  }
})();
