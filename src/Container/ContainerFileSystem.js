const { promises } = require("fs");
const config = require("../config");
const { normalize, schema, denormalize } = require("normalizr");
const { newData } = require("../utils/utils");
const { normalization } = require("../utils/normalization");

class ContainerFileSystem {
  constructor() {
    this.route = `${config.fileSystem.path}/messages.json`;
  }

  async getData() {
    try {
      const res = await promises.readFile(this.route, "utf-8");
      const obj = await JSON.parse(res);
      return obj;
    } catch (error) {
      return [];
    }
  }

  async save(message) {
    const objs = await this.getData();
    console.log(objs);

    objs.push(message);

    try {
      await promises.writeFile(this.route, JSON.stringify(objs, null, 2));
      return message;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll() {
    try {
      const res = await promises.readFile(this.route, "utf-8");
      const myData = await JSON.parse(res);
      const data = await newData(myData);

      // const data = {
      //   id: "mensajes",
      //   mensajes: [
      //     {
      //       id: "gamonalfranco@gmail.com",
      //       nombre: "franco",
      //       apellido: "gamonal",
      //       edad: "22",
      //       alias: "blueshadow",
      //       avatar: "https://cdn-icons-png.flaticon.com/512/147/147142.png",
      //       text: "test",
      //     },
      //     {
      //       id: "francogamonal@gmail.com",
      //       nombre: "franco",
      //       apellido: "gamonal",
      //       edad: "22",
      //       alias: "blueshadow",
      //       avatar: "https://cdn-icons-png.flaticon.com/512/147/147142.png",
      //       text: "test",
      //     },
      //     {
      //       id: "gamonalGM@gmail.com",
      //       nombre: "franco",
      //       apellido: "gamonal",
      //       edad: "22",
      //       alias: "blueshadow",
      //       avatar: "https://cdn-icons-png.flaticon.com/512/147/147142.png",
      //       text: "test",
      //     },
      //   ],
      // };

      // const messageSchema = new schema.Entity(
      //   "mensajes",
      //   {},
      //   { idAttribute: "id" }
      // );
      // const authorSchema = new schema.Entity("authors", {
      //   mensajes: [messageSchema],
      // });

      // const data_normalizada = await normalize(data, authorSchema);

      //  ------------------------------------------------------------------------------

      // const user = new schema.Entity("author");

      // const article = new schema.Entity("mensajes", {
      //   author: user,
      // });

      // const messageSchema = new schema.Entity("mensajes",{
      //   mensajes:
      // });

      // const authorSchema = new schema.Entity("authors", {
      //   mensajes: [messageSchema],
      // });

      const data_normalizada = await normalization(data);

      return data_normalizada;
    } catch (error) {
      return [];
    }
  }

  async test() {
    return console.log("llego al container de fs");
  }
}

module.exports = { ContainerFileSystem };
