const { users } = require("../bd/data.json");

const authorization = ({ email, password }) => {
  return Boolean(
    users.find((item) => item.email == email && item.password == password)
  );
};

module.exports = authorization;
