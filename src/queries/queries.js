const db = require("../database/db_connection");

function getUsers() {
  return new Promise((resolve, reject) => {
    resolve(db.query("select * from users"));
  });
}

function newPost(title, text, url, id) {
  return new Promise((resolve, reject) => {
    resolve(
      db.query(
        "INSERT INTO posts (title, content_text, content_img_url, user_id) VALUES ($1, $2, $3, $4);",
        [title, text, url, id]
      )
    );
  });
}

module.exports = {
  getUsers,
  newPost
};
