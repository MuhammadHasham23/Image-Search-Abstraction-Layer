const mongoose = require("mongoose");

const {Schema} = mongoose;

const Time = new Schema({
  term: String,
  when: String
});

mongoose.model("time",Time);
