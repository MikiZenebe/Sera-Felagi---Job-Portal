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

//JSON Web-Token
export function createJWT(userId, res) {
  const token = JWT.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res?.cookie("jwt", token, {
    httpOnly: true, //more secure
    maxAge: 15 * 24 * 60 * 60 * 1000, //15 days
    sameSite: "strict", //CSRF
  });

  return token;
}
