var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

// Scema setup
var userSchema = new mongoose.Schema({
  fname: String,
  username: String,
  password: String,
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
