//Handler Import
const express = require("express");
const router = express.Router();
const { getLoging } = require("../controller/loginController");
const decorateHtmlRes = require("../middlewares/common/decorateHtmlRes");
//Rotuer
router.get("/", decorateHtmlRes("Login"), getLoging);
//Exports

module.exports = router;
