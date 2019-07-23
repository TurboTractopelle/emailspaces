const chalk = require("chalk");
const restify = require("restify");
const setupJournals = require("../src/controllers/journals");
const setupMovies = require("../src/controllers/movies");
const setupInspections = require("../src/controllers/inspections");

function createServer() {
  const server = restify.createServer();

  server.use(restify.plugins.acceptParser(server.acceptable));
  server.use(restify.plugins.queryParser({ mapParams: false }));
  server.use(restify.plugins.jsonBodyParser({ mapParams: true }));

  setupJournals(server);
  setupMovies(server);
  setupInspections(server);
  console.log(chalk`{green.bold Server created}`);
  return server;
}

module.exports = createServer;
