const app = require("express")();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  res.send({ message: "Hello World" });
});

app.post("/test", async (req, res) => {
  const { name, age } = req.body;
  res.send({ name, age });
});

app.get("/oauth1", (req, res) => {
  res.send({ message: "OAUTH1" });
});

module.exports = app;
