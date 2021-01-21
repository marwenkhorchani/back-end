/* 

The controller layer is where the logic part of your application is going to be implemented
if you have authentication for example, here is where you are going to hash, compare and so on...

In order to add a new controller, just follow the following style:

  async [NAME_OF_THE_FUNCTION](req, res, next) {
    try {
      const [VARIABLE] = await [NAME_OF_THE_SERVICE].[NAME_OF_THE_SERVICE_FUNCTION]()
      res.send([VARIABLE])
    }
    catch(error) {
      // handle error
      res.send("error")
    }
  },

*/

const studentService = require("../services/student.service.js");

module.exports = {
  async getStudents(req, res, next) {
    try {
      const students = await studentService.getStudents();
      res.send(students);
    } catch (error) {
      // handle error
      res.send("error");
    }
  },
  async updateStudentById(req, res, next) {
    try {
      const student = await studentService.updateStudentById(
        req.params,
        req.body
      );
      res.send(student);
    } catch (error) {
      // handle error
      res.send("error");
    }
  },

  async deleteStudentById(req, res, next) {
    try {
      const student = await studentService.deleteStudentById(req.params);
      res.send(student);
    } catch (error) {
      // handle error
      res.send("error");
    }
  },
  async getStudentById(req, res, next) {
    try {
      const student = await studentService.getStudentById(req.params);
      res.send(student);
    } catch (error) {
      // handle error
      res.send("error");
    }
  },

  async addStudent(req, res, next) {
    try {
      const student = await studentService.addStudent(req.body);
      res.send(student);
    } catch (error) {
      // handle error
      res.send(error);
    }
  }
};
