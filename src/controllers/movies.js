const Movies = require("../db/Movies");

function setupMovies(server) {
  server.get("/movies", getMovies);
}

async function getMovies(req, res, next) {
  const data = await Movies.find({}, { title: 1 })
    .limit(10)
    .sort({ title: 1 });
  res.send(data);
  next();
}

module.exports = setupMovies;
