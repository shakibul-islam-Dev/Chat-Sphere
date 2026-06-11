//file Importer
const express = require("express");
const router = express.Router();
const { getUsers } = require("../controller/usersController");
const decorateHtmlRes = require("../middlewares/common/decorateHtmlRes");

//Router
router.get("/", decorateHtmlRes("Users"), getUsers);

//Module Exports
module.exports = router;
