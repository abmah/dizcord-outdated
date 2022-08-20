const express = require("express");
const router = express.Router();

const { getAllMessages, addNewMessage } = require("../controllers/actions");

router.route("/").get(getAllMessages).post(addNewMessage);
module.exports = router;
