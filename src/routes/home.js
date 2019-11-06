const homeHandler = require("../handlers/homeHandler");

module.exports.get =
  ("/",
  (req, res) => {
    homeHandler(req, res);
  });
