const mongoose = require("mongoose");
const login = require("../../.env").login;
const pass = require("../../.env").pass;
const connection = require("./connection")(login, pass);

const moviesSchema = new mongoose.Schema({
  plot: String,
  genres: Array,
  runtime: Number,
  rated: String
});

const Movies = connection.model("Movies", moviesSchema);

module.exports = Movies;
