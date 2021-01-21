const studentService = require("../services/student.service.js");

module.exports = {
  async getStudent(req, res, next) {
    try {
      const users = await studentService.getStudent();
      res.send(users);
    } catch (error) {
      // handle error
      res.send("error");
    }
  },

  async getStudentById(req, res, next) {
    try {
      const user = await studentService.getStudentById(req.params);
      res.send(user);
    } catch (error) {
      // handle error
      res.send("error");
    }
  }
};
