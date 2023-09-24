const express = require("express");
const router = express.Router();

/* link with mysql */

const {
  getInfo,
  signUp,
  logIn,
  accCheck,
  getArticles,
  postArticles,
} = require("./database");

/* routes */

router.get("/", (req, res) => {
  res.render("homePage");
});

router.get("/users", async (req, res) => {
  if (req.session.userID) {
    const info = await getInfo(req.session.userID);
    const { account: acc, email: mail } = info[0];
    res.render("usersPage", { acc, mail });
  } else {
    res.redirect("/logIn");
  }
});

router.post("/users", (req, res) => {
  const { clearSession } = req.body;
  if (clearSession) {
    req.session.destroy();
    res.redirect("/users");
  }
});

router.get("/logIn", (req, res) => {
  if (req.session.userID) {
    res.redirect("/users");
  } else {
    res.render("logIn");
  }
});

router.post("/logIn", async (req, res) => {
  const { acc, pwd } = req.body;
  const isAccMatch = await logIn(acc, pwd);

  if (isAccMatch.length > 0) {
    req.session.userID = isAccMatch[0].id;
    req.session.userName = isAccMatch[0].account;
    // console.log(`acc: ${req.session.userName}`);
    // console.log(isAccMatch[0].id);
    // console.log(isAccMatch[0].account);
    res.redirect("/users");
  } else {
    // 1.2 錯誤 => 顯示錯誤 /logIn
    res.send(isAccMatch);
  }

  // const accChecker = await accCheck(acc);
  // console.log(` accChecker: ${accChecker}`);
});

router.get("/signUp", (req, res) => {
  // 顯示註冊畫面
  res.render("signUp");
});

router.post("/signUp", async (req, res) => {
  const { acc, mail, pwd } = req.body;
  const isAccExist = await accCheck(acc);

  if (!isAccExist) {
    const isSignUpDone = await signUp(acc, mail, pwd);
    res.send(` sign up status: done `);
    // 3.1 註冊成功 => 成功登入狀態
  } else {
    // 3.2 註冊失敗 => 回傳失敗
    res.send(` sign up status: ${!isAccExist}, account has existed`);
  }
});

router.get("/articles", (req, res) => {
  res.render("articles");
});

router.get("/api/articles", async (req, res) => {
  const articlesContent = await getArticles();
  res.json(articlesContent);
});

router.get("/post", (req, res) => {
  if (req.session.userID) {
    res.render("post");
  } else {
    res.send("you're not logging");
  }
});

router.post("/post", async (req, res) => {
  const { title, content } = req.body;
  const author = req.session.userName;
  // console.log(author);

  // 送回 db
  const postStatus = await postArticles(title, content, author);

  if (postStatus) {
    res.redirect("/articles");
  } else {
    res.redirect("/post");
  }
});

module.exports = router;
