const mysql2 = require("mysql2");

const pool = mysql2
  .createPool({
    host: "localhost",
    user: "root",
    password: "!@#$%^&*",
    database: "assignment",
  })
  .promise();

module.exports.getInfo = async (id) => {
  const [rows] = await pool.query(
    `SELECT account, email 
    FROM users
    WHERE id = ?;
    `,
    [id]
  );
  // console.log(rows[0].account, rows[0].email);
  return rows;
};

module.exports.signUp = async (acc, mail, pwd) => {
  const [signUpStatus] = await pool.query(
    `
    INSERT INTO users (account, email, password) 
      VALUES(?, ?, ?)
    `,
    [acc, mail, pwd]
  );
  return signUpStatus;
};

module.exports.accCheck = async (acc) => {
  const [rows] = await pool.query(
    `
      SELECT *
      FROM users
      WHERE account = ?;
    `,
    [acc]
  );

  if (rows.length > 0) {
    return true;
  } else {
    return false;
  }
};

module.exports.logIn = async (acc, pwd) => {
  // const isAccExsit = await module.exports.accCheck(acc);

  /* 
    accCheck 函數是定義在 database.js 文件中，但它不是一個全域函數，無法直接在其他函數中使用
    你在其他 function 要 call 不能直接 await accCheck() 會 undefinded
    記起來了，因為除錯了好久==。
  */

  const [logInStatus] = await pool.query(
    `
      SELECT *
      FROM users
      WHERE account = ? AND password = ?;
    `,
    [acc, pwd]
  );

  if (logInStatus.length > 0) {
    // console.log(logInStatus[0].id);
    // console.log(logInStatus[0].account);
    return logInStatus;
  } else {
    return false;
  }
};

module.exports.getArticles = async () => {
  const [articlesContent] = await pool.query(`
    SELECT *
    FROM article
    ORDER BY id DESC;
  `);

  // console.log(getArticlesContent);
  // console.log(typeof getArticlesContent);
  return articlesContent;
};

module.exports.postArticles = async (title, content, author) => {
  const [postStatus] = await pool.query(
    `
    INSERT INTO article (title, content, author)
    VALUES(?, ?, ?)
  `,
    [title, content, author]
  );

  // console.log(postStatus.affectedRows);
  return postStatus.affectedRows > 0;
};
