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

module.exports = router;
