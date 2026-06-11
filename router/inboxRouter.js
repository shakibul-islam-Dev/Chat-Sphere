//Importer
const express = require("express");
const router = express.Router();
const { getInbox } = require("../controller/inobxController");
const decorateHtmlRes = require("../middlewares/common/decorateHtmlRes");
//Router
router.get("/", decorateHtmlRes("Inbox"), getInbox);

//Exports
module.exports = router;
