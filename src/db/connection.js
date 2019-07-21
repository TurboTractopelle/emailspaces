const mongoose = require("mongoose");

const url = (login, pass) =>
  `mongodb+srv://${login}:${pass}@cluster0-0clli.mongodb.net/test?retryWrites=true`;

const options = {
  connectTimeoutMS: 5000,
  reconnectInterval: 100,
  useCreateIndex: true,
  useNewUrlParser: true
};

function connection(login, pass) {
  return mongoose.connect(url(login, pass), options);
}

module.exports = connection;
