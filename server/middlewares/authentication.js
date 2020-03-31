const jwt = require('jsonwebtoken');

const authentication = function (req, res, next) {

  try {
    const { token } = req.headers

    console.log(token)
    if (!token) {
      throw new Error("token not found")
    } else {
      const decoded = jwt.verify(token, 'rahasia');
      req.userId = decoded.userId
      next()
    }
      
  } catch(e) {
    if (e.message) {
      res.status(404).json({
        message: e.message
      })
    } else {
      res.status(400).json({
        message: "token not found"
      })
    }
    
  }
}

module.exports = authentication