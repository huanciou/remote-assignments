const express = require("express");
const router = express.Router();
const path = require("path");

const names = [];

router.get("/", (req, res) => {
  res.render("homepage", {
    title: "Homepage",
    author: "REDDIT and the ALIEN Logo",
  });
});

router.get("/data", (req, res) => {
  let hasParameter = req.query.number;
  // console.log(hasParameter);
  let numberParse = parseInt(hasParameter, 10);

  if (!hasParameter) {
    res.render("data", { title: "Data Page", author: "" });
  } else if (!isNaN(numberParse)) {
    const result = ((1 + numberParse) * numberParse) / 2;
    res.send(`<h1>${result}</h1>`);
  } else {
    res.send("<h1>Wrong Parameter</h1>");
  }
});

router.get("/sum.html", (req, res) => {
  const fileName = path.resolve(__dirname, "../views/sum.html");
  res.sendFile(fileName);
});

router.get("/myName", (req, res) => {
  if (req.cookies.username) {
    // console.log(names);
    res.render("userPage", {
      name: req.cookies.username,
      title: "User Page",
      author: "",
    });
  } else {
    res.redirect("/trackName");
  }
});

router.post("/myName", (req, res) => {
  let { delCookies } = req.body;

  if (delCookies) {
    res.clearCookie("username");
    res.redirect("/myName");
  }
});

router.get("/trackName", (req, res) => {
  let { name } = req.query;

  /* 確保 res 是最新的，而不是 cache 存的 res */
  res.header("Cache-Control", "no-store");
  res.header("Pragma", "no-cache");

  if (name) {
    names.push(name); // 當有新的 query.name，存在 array 裡面
    res.cookie("username", name);
    res.redirect("/myName");
  } else if (req.cookies.username) {
    res.redirect("/myName");
  } else {
    res.render("register", { title: "Register Page", author: "" });
  }
});

module.exports = router;
