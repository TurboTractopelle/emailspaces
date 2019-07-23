const Inspections = require("../db/Inspections");

function setupInspections(server) {
  server.get("/inspections", getAllInspections);
}

async function getAllInspections(req, res, next) {
  const data = await Inspections.find({}, { business_name: 1 }).limit(5);
  res.send(data);
  next();
}

module.exports = setupInspections;
