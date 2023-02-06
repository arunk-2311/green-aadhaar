const mongoose = require("mongoose");

const Credit = mongoose.model(
  "Credit",
  new mongoose.Schema({
    from : String,
    qty : Number,
    code : String,
    type : String,
    to : String,
  })
);

module.exports = Credit;