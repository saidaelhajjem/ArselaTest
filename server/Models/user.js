const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UsersSchema = new mongoose.Schema({
    firstName: {
      type: String,
     
    },
    lastName: {
      type: String,
     
    },
    email: {
      type: String,
     
    },
    password: {
      type: String,
    },
    role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" }
  }).pre("save", function(next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
  });


module.exports = User = mongoose.model('User', UsersSchema);
