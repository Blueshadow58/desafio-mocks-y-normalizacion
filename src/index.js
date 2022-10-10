const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const { faker } = require("@faker-js/faker");
const { messagesRouter } = require("./router/messages");
const dotenv = require("dotenv");

dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/messages", messagesRouter);
// primera parte
app.get("/api/productos-test", (req, res) => {
  const numberOfProducts = 5;
  const data = [];
  for (let i = 0; i < numberOfProducts; i++) {
    let product = {
      nombre: faker.commerce.product(),
      precio: faker.commerce.price(),
      foto: faker.image.avatar(),
    };
    data.push(product);
  }
  res.send(data);
});

app.get("/", (req, res) => res.redirect("/api/productos-test"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
