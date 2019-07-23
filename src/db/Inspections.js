const login = require("../../.env").login;
const pass = require("../../.env").pass;
const connection = require("../db/connection")(login, pass);
const mongoose = require("mongoose");

const inspectionsSchema = new mongoose.Schema({
  id: Number,
  certificate_number: Number,
  business_name: String,
  date: String,
  result: String,
  sector: String,
  address: {
    city: String,
    zip: Number,
    street: String,
    number: Number
  }
});

const Inspections = connection.model("Inspections", inspectionsSchema);

module.exports = Inspections;
