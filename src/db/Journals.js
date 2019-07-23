const mongoose = require("mongoose");
const login = require("../../.env").login;
const pass = require("../../.env").pass;
const connection = require("./connection")(login, pass);

const journalSchema = new mongoose.Schema({
  title: String,
  dl: Number
});

const Journals = connection.model("Journals", journalSchema);

module.exports = Journals;
