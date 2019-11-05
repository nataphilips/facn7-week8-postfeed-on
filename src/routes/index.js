const express = require("express");
const app = require("../app.js");
const { Router } = express;
const router = Router();
const queries = require("../queries/queries");

router.get("/", (req, res, next) =>
  queries
    .getUsers()
    .then(users => users.rows)
    .then(data => {
      res.render("home", {
        title: "Users list",
        users: data
      });
    })
    .catch(err => next(err))
);

router.post("/add-post", (req, res, next) => {
  let post_title = req.body.title;
  let text_content = req.body.text_content;
  let pic_url = req.body.pic_url;
  let user_id = Number(req.body.user_id);
  // const { post_title, text_content, pic_url, user_id } = req.body;
  queries
    .newPost(post_title, text_content, pic_url, user_id)
    // .then(post => res.status(201).json(post))
    .then(res.redirect("/"))
    .catch(err => next(err));
});

module.exports = router;
