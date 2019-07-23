const fakeJournalsData = require("../../fixtures/fakeJournalsData");
const Journals = require("../db/Journals");

function setupJournals(server) {
  server.get("/", home);
  server.get("/journals", journals);
  server.get({ name: "getJournal", path: "/journals/:title" }, getJournal);
}

function home(req, res, next) {
  res.send("API guide coming one day");
  next();
}

async function journals(req, res, next) {
  const { max } = req.query;
  console.log("MAX", req.query);
  data = await Journals.search({ max });
  res.send(data);
  next();
}

async function getJournal(req, res, next) {
  const data = await Journals.findOne({ title: req.params.title });
  res.send(data);
  next();
}

module.exports = setupJournals;
