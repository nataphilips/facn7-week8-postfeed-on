const bcrypt = require("bcrypt");
const saltRounds = 10;

async function passwordHash(password) {
  const salt = await bcrypt.genSaltSync(saltRounds);
  const hash = await bcrypt.hashSync(password, salt);

  return hash;
}

module.exports = {
  passwordHash
};
