const Inspections = require("../db/Inspections");

function setupInspections(server) {
  server.get("/inspections", getAllInspections);
  server.get("/inspections/city", getAllCities);
}

async function getAllInspections(req, res, next) {
  const filters = req.query;
  const data = await Inspections.search(filters);
  res.send(data);
  next();
}

async function getAllCities(req, res, next) {
  const allCities = await Inspections.getAllCities();
  res.send(allCities);
}

module.exports = setupInspections;
