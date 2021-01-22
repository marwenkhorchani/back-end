module.exports = new (class StudentService {
  constructor() {
    this.student = require("../models/student.model.js");
  }

  getStudent() {
    return this.student.find();
  }
})();
