module.exports = new (class TeachertService {
  constructor() {
    this.teacher = require("../models/teacher.model.js");
  }

  getTeacher() {
    return this.teacher.find();
  }
})();
