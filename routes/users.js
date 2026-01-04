const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/pinterest");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  birthday: Date
});

userSchema.plugin(plm);

module.exports = mongoose.model("User", userSchema);
