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

const teacherService = require("../services/teacher.service.js");

module.exports = {
  async getTeachers(req, res, next) {
    try {
      const teachers = await teacherService.getTeachers();
      res.send(teachers);
    } catch (error) {
      // handle error
      res.send("error");
    }
  },
  async updateTeacherById(req, res, next) {
    try {
      const teacher = await teacherService.updateteacherById(
        req.params,
        req.body
      );
      res.send(teacher);
    } catch (error) {
      // handle error
      res.send("error");
    }
  },

  async deleteTeacherById(req, res, next) {
    try {
      const teacher = await teacherService.deleteTeacherById(req.params);
      res.send(teacher);
    } catch (error) {
      // handle error
      res.send("error");
    }
  },
  async getTeacherById(req, res, next) {
    try {
      const teacher = await teacherService.getteacherById(req.params);
      res.send(teacher);
    } catch (error) {
      // handle error
      res.send("error");
    }
  },

  async addTeacher(req, res, next) {
    try {
      const teacher = await teacherService.addTeacher(req.body);
      res.send(teacher);
    } catch (error) {
      // handle error
      res.send(error);
    }
  }
};
