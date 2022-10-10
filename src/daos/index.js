let messagesDao;

const dotenv = require("dotenv");

dotenv.config();

console.log(process.env.PERS);
switch (process.env.PERS) {
  case "json":
    const { ContainerFileSystem } = require("../Container/ContainerFileSystem");
    messagesDao = new ContainerFileSystem();

    break;
  case "mongodb":
    const { ContainerMongoDb } = require("../Container/ContainerMongoDb");
    messagesDao = new ContainerMongoDb();
    break;
  case "firebase":
    const { ContainerFirebase } = require("../Container/ContainerFirebase");
    messagesDao = new ContainerFirebase();

    break;
  default:
}

module.exports = { messagesDao };
