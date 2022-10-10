const { promises } = require("fs");
const config = require("../config");
const { normalize, schema, denormalize } = require("normalizr");
const { newData } = require("../utils/utils");
const { normalization } = require("../utils/normalization");
const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert(
    JSON.parse(JSON.stringify(config.firebase))
  ),
});

const db = admin.firestore();

class ContainerFirebase {
  constructor() {
    this.collection = db.collection("mensajes");
  }

  async save(message) {
    try {
      await this.collection.add(message);
      return message;
    } catch (error) {
      throw new Error(`Error al guardar: ${error}`);
    }
  }

  async getAll() {
    try {
      const snapshot = await this.collection.get();

      let snapData = [];
      await snapshot.forEach((doc) => {
        snapData.push(doc.data());
      });

      const data = await newData(snapData);

      const data_normalizada = await normalization(data);

      return data_normalizada;
    } catch (error) {
      return console.log(error);
    }
  }
}

module.exports = { ContainerFirebase };
