const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const router = require("./routes/route");

app.use(cors());
app.use(express.json());
app.use("/data", router);

mongoose
  .connect("mongodb://localhost:27017")
  .then((res) => {
    console.log("Connected to unnati db");
  })
  .then((abcd) => {
    app.listen(5000);
  })
  .catch((e) => {
    console.log(e);
  });
//hello this sudhanshu
