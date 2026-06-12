//file Importer
const express = require("express");
const router = express.Router();
const { getUsers } = require("../controller/usersController");
const decorateHtmlRes = require("../middlewares/common/decorateHtmlRes");
const avatarUpload = require("../middlewares/users/avatarUpload");
//Router
router.get("/", decorateHtmlRes("Users"), getUsers);
//avartUpload
router.post("/", avatarUpload);
//Module Exports
module.exports = router;
