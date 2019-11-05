const app = require("./app");

const { getUsers } = require("./queries/queries");

getUsers()
  .then(data => console.log(data.rows))
  .catch(err => console.log(err));

const port = app.get("port");
app.listen(port, () => {
  console.log(`Listening at port ${port}...`);
});
