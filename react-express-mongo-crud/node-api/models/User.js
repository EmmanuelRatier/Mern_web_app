const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const saltRounds = 10;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

UserSchema.pre('save', function(next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  console.log(this.password)
  next();
});

module.exports = mongoose.model("Users", UserSchema);