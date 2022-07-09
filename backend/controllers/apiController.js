const Show = require("../model/Unnati.js");

const addData = async (req, res) => {
  let data;
  try {
    data = new Show({
      name: req.body.name,
      year: req.body.year,
      genre: req.body.genre,
    });
    await data.save();
  } catch (error) {
    console.log(error);
  }
  if (!data) {
    res.status(500).json({
      msg: "can not add shows",
    });
  }
  return res.status(201).json({
    data,
  });
};

const getData = async (req, res) => {
  let data;
  try {
    data = await Show.find();
  } catch (error) {
    console.log(error);
  }
  if (!data) {
    res.status(404).json({
      msg: "no data found",
    });
  }
  return res.status(200).json({
    data,
  });
};

const putData = async (req, res) => {
  const id = req.params.id;
  const { name, year, genre } = req.body;
  let data;
  try {
    data = await Show.findByIdAndUpdate(id, { name, year, genre });
    data = await data.save();
  } catch (error) {
    console.log(error);
  }
  if (!data) {
    res.status(400).json({
      msg: "data not found",
    });
  }
  return res.status(200).json({
    data,
  });
};
exports.addData = addData;
exports.getData = getData;
exports.putData = putData;
