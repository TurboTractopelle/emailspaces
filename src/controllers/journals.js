const restify = require("restify");
const journalsData = require("../../fixtures/journals.json")

function setupJournals(server) {
  const router = server.router;

  server.get("/", (req,res,next)=>{
    res.send("API guide coming one day")
    next()
  })

  server.get({name: "getJournal", path:"/journals/:id" }, getJournal)

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
  next()
}

function getJournal(req, res, next){
if(req.params.id && req.params.id >5){
  res.status(404)
  res.send("nope")
} else {
  res.send(journalsData.filter(journal => journal.id === req.params.id)[0])
  next()

}





}

module.exports = setupJournals;
