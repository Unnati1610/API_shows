const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController.js");
const data = require("../model/Unnati");

router.post("/", apiController.addData);
router.get("/", apiController.getData);
router.put("/:id", apiController.putData);
router.get("/getAll", async (req, res) => {
  let obj = await data.find();
  if (!obj) {
    res.status(404).json({
      msg: "no data",
    });
  }
  return res.json(obj);
});

module.exports = router;
