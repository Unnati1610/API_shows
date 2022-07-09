const Show = require("../model/Unnati.js");

const addData = async (req, res) => {
  const { name, year, genre } = req.body;
  let data;
  try {
    data = new Show({
      name,
      year,
      genre,
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

exports.addData = addData;
