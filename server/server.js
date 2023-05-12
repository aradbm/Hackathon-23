const express = require("express");
const app = express();
const PORT = 5001;

const pg_connector = require("./pg_connector.js");
const getRandomItem = require("./local_db.js").getRandomItem;
const generateRandomDate = require("./local_db.js").generateRandomDate;
const convertUnixTimestamp = require("./local_db.js").convertUnixTimestamp;
const run = require("./chatbot.js").run;

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
  res.send('ok');
});

const sleep = (min, max) => {
  const delay = Math.floor(Math.random() * (max - min + 1)) + min;
  return new Promise((resolve) => setTimeout(resolve, delay));
};

const minDelay = 1000; // Minimum delay in milliseconds
const maxDelay = 10000; // Maximum delay in milliseconds

app.get('/db', async (req, res) => {
  let id = req.query.id;
  for(let i = 0; i < 1000; i++){
    sleep(minDelay, maxDelay);
    let result = await pg_connector.insert_product(getRandomItem(id));
    if (result.err) {
      console.error('Error executing function:', result.err);
      return res.sendStatus(503)
    }

  }
  res.send('ok');
});

app.get('/chatbot', async (req, res) => {
  res.send(await run(req.query.message));
});

app.get('/time', (req, res) => {
  res.send(convertUnixTimestamp(new Date().getTime()));
});

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}
