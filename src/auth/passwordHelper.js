const bcrypt = require("bcryptjs");

const bycryptPassword = async userPassword => {
  try {
    let salt = await bcrypt.genSalt(10);
    let hashsed = await bcrypt.hash(userPassword, salt);
    return hashsed;
  } catch (e) {
    console.log(e);
  }
};

const checkPasswordMatch = async (password, hashedPassword) => {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { bycryptPassword, checkPasswordMatch };
