const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
  res.render("alan", { myVar: "The Cat!" });
});

app.get("/cats", (req, res) => {
  const mickeyMouse = req.query.myQueryParam;
  res.render("cats", { result: "<h1>Meow!</h1>", myQueryParam: mickeyMouse });
});

app.get("/dogs", (req, res) => {
  res.render("dogs", { result: "<h1>Woof!</h1>" });
});

app.get("/cats_and_dogs", (req, res) => {
  res.render("cats_and_dogs", { result: "<h1>Living Together!!</h1>" });
});

app.listen(3000, () => {
  console.log("Express listening on port 3000!");
});
