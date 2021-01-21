module.exports = new (class GradeService {
  constructor() {
    this.grade = require("../models/grades.model.js");
  }

  getGrade() {
    return this.grade.find().populate("student").populate("class");
  }
  getGradeById({ _id }) {
    return this.grade.findById(_id).populate("student").populate("class");
  }
})();
