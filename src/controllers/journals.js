const fakeJournalsData = require("../../fixtures/fakeJournalsData");
const Journals = require("../db/Journals");

function setupJournals(server) {
  server.get("/", (req, res, next) => {
    res.send("API guide coming one day");
    next();
  });

  server.get({ name: "getJournal", path: "/journals/:id" }, getJournal);
  server.get("/journals", journals);
}

async function journals(req, res, next) {
  const journals = await Journals.find();
  res.send(journals);
  next();
}

function getJournal(req, res, next) {
  if (req.params.id && req.params.id > 5) {
    res.status(500);
    res.send("nope");
    next();
  } else {
    res.send(
      fakeJournalsData.filter(journal => journal.id === req.params.id)[0]
    );
    next();
  }
}

module.exports = setupJournals;
