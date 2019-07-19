const restify = require("restify");

const journalContent = ["a", "b", "c"];

function setupJournalContent(server) {
  server.get("/journal/:id", (req, res, next) => {
    console.log(req.params);
    res.send("journals");
    next();
  });

  return server;
}

module.exports = setupJournalContent;
