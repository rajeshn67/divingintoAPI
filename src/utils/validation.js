const validator = require("validator");

const validatesignUpData = (req) => {
  const { firstname, lastname,emailId,password} = req.body;
  if (!firstname || !lastname) {
    throw new Error("Name is not valid");
  } else if (!validator.isEmail(emailId)) {
    throw new Error("Email is not valid");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Please enter a strong Password");
  }
};
module.exports = { validatesignUpData };