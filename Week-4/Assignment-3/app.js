const express = require("express");
const app = express();
const session = require("express-session");

/* middleware */
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "this-is-a-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

/* router */
const router = require("./router/index");
app.use(router);

/* page not found */
app.use((req, res, next) => {
  res.render("notfound");
  next();
});

/* listerning */
app.listen("3000", (req, res) => {
  console.log("Server is running on port:3000");
});
