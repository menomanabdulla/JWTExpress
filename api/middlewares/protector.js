const jwt = require('jsonwebtoken');

const authenticates = (req,res,next)=>{
    const token = req.body.token || req.query.token || req.headers['x-access-token']
    
    if (token) {
        jwt.verify(token, config.secret, function(err, decoded) {
          if (err) {
            res.status(403).json({
              success: false,
              message: 'Failed to authenticate token.'
            });
          } else {
            req.decoded = decoded;
            next();
          }
        });
      } else {
        res.status(403).json({
          success: false,
          message: 'No token provided.'
        });
      }
}

module.exports = authenticates