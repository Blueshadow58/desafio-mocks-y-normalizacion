const config = require("../config");
const { newData } = require("../utils/utils");
const { normalization } = require("../utils/normalization");
const mongoose = require("mongoose");
const url = config.mongodb.cnxStr;
const connectionParams = config.mongodb.options;

mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to the Mongo database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`);
  });

class ContainerMongoDb {
  constructor() {
    this.collection = mongoose.model("mensajes", {
      id: { type: String, required: true },
      nombre: { type: String, required: true },
      apellido: { type: String, required: true },
      edad: { type: Number, required: true },
      alias: { type: String, required: true },
      avatar: { type: String, required: true },
      text: { type: String, required: true },
    });
  }

  async save(message) {
    try {
      await this.collection.create(message);
      return message;
    } catch (error) {
      throw new Error(`Error al guardar: ${error}`);
    }
  }

  async getAll() {
    try {
      const mongoData = await this.collection
        .find({}, { _id: false, __v: false })
        .lean();

      console.log(typeof mongoData);

      const data = await newData(mongoData);

      const data_normalizada = await normalization(data);

      return data_normalizada;
    } catch (error) {
      return console.log(error);
    }
  }
}

module.exports = { ContainerMongoDb };
