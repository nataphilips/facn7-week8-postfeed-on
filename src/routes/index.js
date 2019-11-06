const express = require("express");
const app = require("../app.js");
const { Router } = express;
const router = Router();
const queries = require("../queries/queries");
const error = require("./error");

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

router.use(error.client);
router.use(error.server);

module.exports = router;
