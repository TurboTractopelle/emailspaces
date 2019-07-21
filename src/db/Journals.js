const mongoose = require("mongoose");
const connection = require("./connection")("nero", "nero");

const journalSchema = new mongoose.Schema({
  name: String
});

const Journals = connection.model("Journals", journalSchema);

module.exports = Journals;
