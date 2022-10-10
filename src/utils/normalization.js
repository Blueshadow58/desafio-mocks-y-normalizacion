const { normalize, schema, denormalize } = require("normalizr");

async function normalization(data) {
  const mensajes = new schema.Entity("mensajes");
  const user = new schema.Entity(
    "author",
    {
      mensajes: mensajes,
    },
    { idAttribute: "id" }
  );

  // post articles
  const post = new schema.Entity("authors", {
    mensajes: [user],
  });
  const data_normalizada = await normalize(data, post);
  return data_normalizada;
}

module.exports = { normalization };
