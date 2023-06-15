const { JWT_CONFIG } = require("../../../../config");
var jwt = require("jsonwebtoken");

const decryptToken = async (req, res, next) => {
  try {
    //console.log(req.headers["authorization"]);
    var token = req.headers["authorization"].split(" ")[1];

    let decodeToken = await jwt.verify(token, JWT_CONFIG.publicKey, {
      algorithms: ["RS256"],
    });

    res.status(200).send({
      decryptToken: decodeToken,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Servor Error");
  }
};
module.exports = decryptToken;
