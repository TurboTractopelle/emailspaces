const mongoose = require("mongoose");
const login = require("../../.env").login;
const pass = require("../../.env").pass;
const connection = require("./connection")(login, pass);

const journalSchema = new mongoose.Schema({
  title: String,
  downloads: Number
});

journalSchema.statics.search = search;

async function search(filters) {
  if (filters["max"]) {
    console.log("ICI");
    return await this.find({ downloads: { $lte: +filters["max"] } });
  }
  console.log("LA");
  return await this.find({});
}

const Journals = connection.model("Journals", journalSchema);

module.exports = Journals;
