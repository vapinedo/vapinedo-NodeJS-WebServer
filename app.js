const express = require("express");
<<<<<<< HEAD
const hbs = require("hbs");
require('dotenv').config();

const app = express();
const port = process.env.PORT;

const partialData = {
  author: "Valp",
  course: "Curso de Node JS",
};

// Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Serve static content
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", partialData);
});

app.get("/generic", (req, res) => {
  res.render("generic", partialData);
});

app.get("/elements", (req, res) => {
  res.render('elements', partialData);
});

app.get("/hello", (req, res) => {
  res.send("Hello Page");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Server listening on https://localhost:${port}`);
=======
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/hello", (req, res) => {
  res.send("Hello Page");
});

app.get("*", (req, res) => {
    res.send("404 | Page not found");
});

app.listen(port, () => {
    console.log(`Server listening on https://localhost:${port}`);
>>>>>>> 4f2665e272249b0995a43e8defe591093ab7d14b
});
