const chalk = require("chalk");
const restify = require("restify");
const setupJournals = require("../src/controllers/journals");

function createServer() {
  const server = restify.createServer();

  setupJournals(server);
  console.log(chalk`{green.bold Server created}`);
  return server;
}


module.exports = createServer;
