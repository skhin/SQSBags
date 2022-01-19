const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  console.log(req);
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, "jwtkey", (err, user) => {
      if (err) res.status(403).json("Token invalid");
      req.user = user;
      next();
    });
  } else {
    console.log(req.headers);
    return res.status(401).json("User not authenticated");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("User not allowed to perform requested function");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("User not allowed to perform requested function");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
