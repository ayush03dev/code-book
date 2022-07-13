const jwt = require("jsonwebtoken");

module.exports = async function (req, res, next) {
  try {
    const token = req.header("x-auth-token");

    if (!token) {
      return res
        .status(400)
        .json({ message: "Please specify the token in the header!" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error!" });
  }
};
