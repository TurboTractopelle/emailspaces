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
  const journals = await Journals.find();
  res.send(journals);
  next();
}

async function getJournal(req, res, next) {
  const data = await Journals.find({ title: req.params.title });
  res.send(data);
  next();
}

module.exports = setupJournals;
