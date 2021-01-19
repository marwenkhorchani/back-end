/* 

Here is the first endpoint that the request hits.
In order to add a new route, just follow the following style:

router.[METHOD]("[ENDPOINT]", [NAME_OF_THE_CONTROLLER].[NAME_OF_THE_FUNCTION])


*/

const router = require("express").Router();
const userController = require("../controllers/user.controller.js");

router.get("/", userController.getUsers);

router.post("/", userController.addUser);

router.get("/:_id", userController.getUserById);

module.exports = router;
