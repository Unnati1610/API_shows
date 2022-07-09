const mongoose = require("mongoose");
const schema = mongoose.Schema;
const apiSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
  },
});
module.exports = mongoose.model("show", apiSchema);
