const express = require("express");
const messagesRouter = express.Router();
const { messagesDao } = require("../daos/index");
const multer = require("multer");
const upload = multer();

messagesRouter.get("/", async (req, res) => {
  res.send(await messagesDao.getAll());
});

messagesRouter.post("/", upload.none(), async (req, res) => {
  res.send(await messagesDao.save(req.body));
});

module.exports = { messagesRouter };
