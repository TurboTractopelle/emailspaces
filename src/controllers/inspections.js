const Inspections = require("../db/Inspections");

function setupInspections(server) {
  server.get("/inspections", getAllInspections);
  server.get("/inspections/cities", getAllCities);
  server.get("/inspections/sectors", getAllSectors);
  server.get("/inspections/statesBySectors", statesBySectors);
  server.get("/inspections/:name", getBusinessHistory);
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

async function getBusinessHistory(req, res, next) {
  const name = req.params;
  const businessHistory = await Inspections.getBusinessHistory(name);
  res.send(businessHistory);
}

async function statesBySectors(req, res, next) {
  const data = await Inspections.statesBySectors();
  res.send(data);
}

module.exports = setupInspections;
