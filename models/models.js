const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  deartment: {
    type: String,
    required: true,
    unique: true,
  },
  salary: {
    type: String,
    required: true,
    unique: true,
  },
  Designation: {
    type: String,
    required: true,
    unique: true,
  },
  employee_type: {
    type: String,
    required: true,
    unique: true,
  },
});

const Userdb = mongoose.model("userdb", schema);

module.exports = Userdb;
