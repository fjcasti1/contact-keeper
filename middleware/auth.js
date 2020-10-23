const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'Not authorized' });
  }
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    // Assign the decoded user to the request to have access in our protected routes
    req.user = decoded.user;

    next();
  } catch (err) {
    return res.status(401).json({ msg: 'Not authorized' });
  }
};
