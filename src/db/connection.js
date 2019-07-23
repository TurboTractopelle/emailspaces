const mongoose = require("mongoose");
const chalk = require("chalk");

const url = (login, pass) => {
  if (global.MONGODB_URI) {
    console.log(chalk`{green.bold memserver}`);
  }
  return (
    global.MONGODB_URI ||
    `mongodb+srv://${login}:${pass}@cluster0-0clli.mongodb.net/sample_training?retryWrites=true`
  );
};
const options = {
  connectTimeoutMS: 5000,
  reconnectInterval: 100,
  useCreateIndex: true,
  useNewUrlParser: true
};

function connection(login, pass) {
  const connection = mongoose.createConnection(url(login, pass), options);
  mongoose.set("useFindAndModify", false);
  return connection;
}

module.exports = connection;
