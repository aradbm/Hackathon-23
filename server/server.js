const express = require("express");
const app = express();
const PORT = 5001;

const pg_connector = require("./pg_connector.js");
const getRandomItem = require("./local_db.js").getRandomItem;
const generateRandomDate = require("./local_db.js").generateRandomDate;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT} on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("main page");
});

app.get('/i', async (req, res) => {
  let id = req.query.id;
  let result = await pg_connector.insert_product(getRandomItem(id));
  if (result.err) {
    console.error('Error executing function:', result.err);
    return res.sendStatus(503)
  }

  // console.log(result.data);
  res.send('ok');
});

app.get('/date', (req, res) => {
  res.send(generateRandomDate(new Date(), new Date(2023, 5, 12)));
});

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}
