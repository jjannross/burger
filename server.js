const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
const exphbs = require("express-handlebars");

//unwrapping client data to original format and stores in req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//makes public folder home directory on the browser
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(require("./controllers/burgers_controller"));

app.listen(PORT, function () {
  console.log("app is listening on " + PORT);
});

