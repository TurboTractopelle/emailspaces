const chalk = require("chalk");
const restify = require("restify");
const setupJournals = require("../src/controllers/journals");

function createServer() {
  const server = restify.createServer();

  server.use(restify.plugins.acceptParser(server.acceptable));
  server.use(restify.plugins.queryParser({ mapParams: false }));
  server.use(restify.plugins.jsonBodyParser({ mapParams: true }));

  setupJournals(server);
  console.log(chalk`{green.bold Server created}`);
  return server;
}

module.exports = createServer;
