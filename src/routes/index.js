const express = require("express");
const app = require("../app.js");
const { Router } = express;
const router = Router();
const queries = require("../queries/queries");
const error = require("./error");
const cookieParser = require("cookie-parser");

router.get("/", (req, res, next) =>
  queries
    .getPosts()
    .then(posts => posts.rows)
    .then(data => {
      res.render("home", {
        title: "Posts",
        posts: data
      });
    })
    .catch(err => next(err))
);

router.post("/add-post", (req, res, next) => {
  let post_title = req.body.title;
  let text_content = req.body.text_content;
  let pic_url = req.body.pic_url;
  user_id = Number(req.body.user_id);
  queries
    .newPost(post_title, text_content, pic_url, user_id)
    .then(res.redirect("/"))
    .catch(err => next(err));
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/create-user", (req, res) => {
  //check if user is exists
  const { username, password } = req.body;

  queries
    .getUsers()
    .then(users => users.rows)
    .then(users =>
      users.filter(u => {
        const user = u.user_name == username;
        if (user) {
          res.render("register", {
            message: "User with the given name already exists"
          });
        } else {
          queries.newUser(username, password);
          res.redirect("/");
        }
      })
    )
    .catch(err => console.log(err));
});

router.get("/login", (req, res) => {
  queries
    .getUsers()
    .then(users => users.rows)
    .then(users =>
      users.filter(u => {
        const user = u.user_name == username;
        if (!user) {
          res.render("login", {
            message: "Password or username isn't correct"
          });
        } else {
          res.redirect("/");
        }
      })
    )
    .catch(err => console.log(err));
});

router.post("/auth", (req, res) => {
  const { username, password } = req.body;
  //check if user exists

  //check if password match
});

router.use(error.client);
router.use(error.server);

module.exports = router;
