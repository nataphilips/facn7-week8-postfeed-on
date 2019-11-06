const db = require("../database/db_connection");

function getUsers() {
  return new Promise((resolve, reject) => {
    resolve(db.query("select * from users"));
  });
}

function getPosts() {
  return new Promise((resolve, reject) => {
    resolve(
      db.query(
        `SELECT
            user_name,
            u.user_id,
            title,
            content_text,
            content_img_url,
            post_rank
         FROM posts p
         JOIN users u ON u.user_id = p.user_id
         ORDER BY post_id DESC;`
      )
    );
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

function newUser(username, password) {
  return new Promise((resolve, reject) => {
    resolve(
      db.query("INSERT INTO users (user_name, password) VALUES ($1, $2);", [
        username,
        password
      ])
    );
  });
}

module.exports = {
  getUsers,
  newPost,
  getPosts,
  newUser
};
