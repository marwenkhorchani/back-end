module.exports = new (class StudentService {
  constructor() {
    this.student = require("../models/student.model.js");
  }

  getStudent() {
    return this.student.find().populate("class");
  }
  getStudentById({ _id }) {
    return this.student.findById(_id).populate("grade");
  }
})();
