import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

export const hashString = async (userValue) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(userValue, salt);
  return hashedPassword;
};

export const compareString = async (userPassword, password) => {
  const isMatch = await bcrypt.compare(userPassword, password);
  return isMatch;
};

const secret_key = "hjhd468dsd";
//JSON Web-Token
export function createJWT(id) {
  return JWT.sign({ userId: id }, secret_key, {
    expiresIn: "15d",
  });
}
