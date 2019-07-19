const chalk = require("chalk");
const restify = require("restify");
const setupJournals = require("../src/controllers/journals");
const setupJournalContent = require("../src/controllers/journalContent");

function createServer() {
  const server = restify.createServer();

  setupJournals(server);
  setupJournalContent(server);
  console.log(chalk`{green.bold Server created}`);
  return server;
}

module.exports = createServer;
