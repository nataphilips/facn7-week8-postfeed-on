const path = require("path");
const exphbs = require("express-handlebars");
const routes = require("./routes/index.js");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(routes);

app.set("views", path.join(__dirname, "..", "public", "views"));
app.set("view engine", "hbs");
app.set("port", process.env.PORT || 3000);
app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
    layoutsDir: path.join(__dirname, "..", "public", "views", "layouts"),
    partialsDir: path.join(__dirname, "..", "public", "views", "partials"),
    defaultLayout: "main"
    // helpers: {
    //   popeval: popeval
    // }
  })
);

const port = app.get("port");
app.listen(port, () => {
  console.log(`Listening at port ${port}...`);
});
