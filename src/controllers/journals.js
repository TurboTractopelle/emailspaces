const restify = require("restify");
const journalsData = require("../../fixtures/journals.json")

function setupJournals(server) {
  const router = server.router;

  server.get(
    {
      name: "journals",
      path: "/journals"
    },
    journals
  );

  return server;
}

function journals(req, res, next) {
  res.send(journalsData);
}

module.exports = setupJournals;
