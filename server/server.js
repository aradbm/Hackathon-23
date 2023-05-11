const express = require("express");
const app = express();
const PORT = 5001;

const pg_connector = require("./pg_connector.js");

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


app.get('/', async (req, res) => {
  let id = req.query.id;
  let currentDate = new Date();

  let obj = { makat: id, product_type: 'T-shirt', price: 100, color: 'red', product_size: 'L', scan_date: convertUnixTimestamp(currentDate.getTime()), scan_location: 'booths', snif: 'dizingoff_center' };
  let result = await pg_connector.insert_product(obj)
  if (result.err) {
    console.error('Error executing function:', result.err);
    return res.sendStatus(503)
  }

  // console.log(result.data);
  res.send('ok');
});

// converts unixtimestamp to a YYYY-MM-DD HH:mm:ss datetime format
convertUnixTimestamp = (unixTimestamp) => {
  const date = new Date(unixTimestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // add leading zero if necessary
  const day = String(date.getDate()).padStart(2, '0'); // add leading zero if necessary
  const hour = String(date.getHours()).padStart(2, '0'); // add leading zero if necessary
  const minute = String(date.getMinutes()).padStart(2, '0'); // add leading zero if necessary
  const second = String(date.getSeconds()).padStart(2, '0'); // add leading zero if necessary
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}
