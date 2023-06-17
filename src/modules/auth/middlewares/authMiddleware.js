var jwt = require("jsonwebtoken");
const { JWT_CONFIG } = require("../../../../config");

const authMiddleware = async (req, res, next) => {
  try {
    //console.log(req.headers["authorization"]);
    if (!req.headers.authorization) {
      throw new Error();
    }
    var token = req.headers["authorization"].split(" ")[1];
    let decodeToken = jwt.verify(token, JWT_CONFIG.publicKey, {
      algorithms: ["RS256"],
    });
    // if (decodeToken.exp < Math.floor(Date.now() / 1000)) {
    //   throw new error();
    // }

    req.user = {};
    req.user = decodeToken.sub;
    next();
  } catch (err) {
    console.log(err);
    res.status(403).send({
      message: "Not Authorized",
    });
  }
};

module.exports = authMiddleware;
