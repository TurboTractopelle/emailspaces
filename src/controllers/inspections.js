const Inspections = require("../db/Inspections");

function setupInspections(server) {
  server.get("/inspections", getAllInspections);
  server.get("/inspections/cities", getAllCities);
  server.get("/inspections/sectors", getAllSectors);
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

async function getAllSectors(req, res, next) {
  const allSectors = await Inspections.getAllSectors();
  res.send(allSectors);
}

module.exports = setupInspections;
