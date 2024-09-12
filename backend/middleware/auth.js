const jwt = require("jsonwebtoken");
const Auth = (req, res, next) => {
  const token = req.cookies["token"];
  if (!token) {
    res.status(401).json({ msg: "user not logged in" });
  }
  try {
    const decoded=jwt.verify(token,process.env.SECRET_KEY)
        req.user = decoded._id
        next()
    
  } catch (error) {
    res.status(401).json({ msg: "Invalid token" });
    
  }
};
module.exports= Auth