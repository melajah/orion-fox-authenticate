const errorHandler = function (err, req, res, next) {
  console.log(err)
  let errors = ["internal server error"]
  let status = 500
  if (err.name === 'SequelizeValidationError') {
    errors = []
    status = 400
    err.errors.forEach( function(error) {
      errors.push(error.message)
    });
  }

  res.status(status).json(errors)
}

module.exports = errorHandler