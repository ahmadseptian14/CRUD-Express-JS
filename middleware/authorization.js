const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
  const token = req.header('auth-token');
  const ACCESS_TOKEN = process.env.ACCESS_TOKEN_SECRET;
  if (!token) {
    return res.status(401).json({ message: 'Access denied. Token is required.' });
  }

  try {
    const decoded = jwt.verify(token, ACCESS_TOKEN);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

// const verifyToken = (req, res, next) => {
//   const token = req.headers.authorization;
//   const ACCESS_TOKEN = process.env.ACCESS_TOKEN_SECRET;
//   if (!token) return res.status(403).json({ message: 'Token is not provided' });

//   jwt.verify(token, ACCESS_TOKEN, (err, user) => {
//     if (err) return res.status(401).json({ message: 'Unauthorized access' });
//     req.user = user;
//     next();
//   });
// };

module.exports = { verifyToken };
