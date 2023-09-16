const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");

/* middleware */

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
// Express ^4.16 不需要再額外裝 body-parser :)
app.use(cookieParser());

/* router */

const router = require("./routes");
app.use(router);

/* listen on port: 3000*/

app.listen("3000", () => {
  console.log("server is running on port: 3000");
});
