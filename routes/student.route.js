/* 

Here is the first endpoint that the request hits.
In order to add a new route, just follow the following style:

router.[METHOD]("[ENDPOINT]", [NAME_OF_THE_CONTROLLER].[NAME_OF_THE_FUNCTION])


*/

const router = require("express").Router();
const studentController = require("../controllers/student.controller.js");

router.get("/", studentController.getStudent);
router.get("/:_id", studentController.getStudentById);

module.exports = router;
