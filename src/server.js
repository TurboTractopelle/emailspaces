const chalk = require("chalk");
const PORT = process.env.PORT || 3000;
const createServer = require("./app");
const connection = require("./db/connection");
const login = require("../.env").login;
const pass = require("../.env").pass;

connection(login, pass).on("open", res => {
  console.log("Connected to mongo atlas");
  initServer();
});

function initServer() {
  const server = createServer();

  server.listen(PORT, () => {
    console.log(chalk`
    {green ✅  ${server.name} REST server started at}
    {cyan.underline http://localhost:${PORT}}`);
  });
}
