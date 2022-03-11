import jwt from "jsonwebtoken";

var { JWT_SECRET } = process.env;

const verifyToken = (req, res, next) => {
  var token =
    req.body.api_token || req.query.api_token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      success: false,
      message: "Token is required for verification",
      error: {
        statusCode: 403,
        auth: false,
        description: "You must provide a token to authenticate your call",
      },
    });
  }

  jwt.verify(token, JWT_SECRET, async function (err, decoded) {
    if (err) {
      return res.status(401).send({
        success: false,
        message: "Invalid Token",
        error: {
          statusCode: 401,
          auth: false,
          description: "You entered an invalid token",
        },
      });
    }

    req.user = decoded;
    console.log(decoded);
    // console.log(req.user);
    next();
  });
};

export { verifyToken }
