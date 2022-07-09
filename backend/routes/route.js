const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController.js");

router.post("/", apiController.addData);
router.get("/", apiController.getData);
router.put("/:id", apiController.putData);

module.exports = router;
