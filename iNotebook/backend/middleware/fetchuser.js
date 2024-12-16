const jwt = require("jsonwebtoken");
const JWT_SECRET = "ShailendraSingh";

const fetchuser = (req, res, next) => {
  //Get the user from jwt token and id to req object
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.id; // Ensure 'data.user' or adjust based on your JWT pauload structure
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = fetchuser;
