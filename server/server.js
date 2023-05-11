const express = require("express");
const app = express();
const PORT = 5001;

let Axios = require("axios");

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
  res.send("Main page");
});

app.get("/:id", (req, res) => {
  const id = req.query.id;
  console.log(id);
  console.log(Date.getDate());
  let obj = { makat: id, readerLocation: "12" , type: "T-shirt", color: "red", size: "L", price: 100, timestamp: Date.getDate(), snif: "Dizingoff_center" };
  
  

  
  
  res.send("ok");
});






//get user with /id in url
app.get("/users/:id", (req, res) => {
  //find user by id and return it to client
  const userFound = users.find(user => user.id === req.params.id);
  if(userFound !== undefined) {
    res.json(userFound);
  } else {
    res.json({message: 'User not found'});
  }
});



async function fetchExcuse(req,res) 
{
  console.log(req.query.theme);
  let theme = await Axios.get(`https://excuser-three.vercel.app/v1/excuse/${req.query.theme}/`);
  return theme.data;
};


function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}
