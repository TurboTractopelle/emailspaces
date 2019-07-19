const chalk = require("chalk");
const PORT = process.env.PORT || 3000;
const createServer = require("./app");

function initServer() {
  const server = createServer();

  server.listen(PORT, () => {
    console.log(chalk`
    {green ✅  ${server.name} REST server started at}
    {cyan.underline ${server.url}}`);
  });
}

initServer();
