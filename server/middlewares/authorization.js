const { Book  } = require('../models');

const authorization = function (req, res, next) {
    Book
      .findOne({
        where: {
          id: req.params.id
        }
      })
      .then(book => {
        if (!book) {
          res.status(404).json({
            message: "book not found"
          })
        } else {
          if (book.UserId === req.userId) {
            next()
          } else {
            res.status(400).json({
              message: "accessm forbidden"
            })
          }
        }
      })
      .catch(err => {
        res.status(500).json({
          message: "internal server error"
        })
      })
}

module.exports = authorization