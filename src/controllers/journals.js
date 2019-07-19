const restify = require("restify");

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
  res.send("gg");
}

module.exports = setupJournals;
