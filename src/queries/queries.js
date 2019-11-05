const db = require("../database/db_connection");

function getUsers() {
  return new Promise((resolve, reject) => {
    resolve(db.query("select * from users"));
  });
}

module.exports = {
  getUsers
};
