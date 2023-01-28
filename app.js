// //ajouter comme reponse
// avant app get.use
// app.use(express.static(__dirname));

const express = require("express");
const app = express();
app.use(express.json());
const port = 8000;

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});
//  app.get("/", (req, res) => {
//   res.send("<h1>welcome to my home page</h1>");
// });
app.get("/about", (req, res) => {
  res.send("<h1>what about me</h1>");
});
app.get("/works", (req, res) => {
  res.send("<h1>you can look my works</h1>");
});

app.listen(port, () => {
  console.log(`he said hello on port :${port}`);
});
// app.get('/Home',(req,res)=>{
//     res.sendFile(__dirname + "/views/Home.html");
//  })

exports.app;
