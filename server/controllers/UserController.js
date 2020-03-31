const { User } = require('../models');
const jwt = require('jsonwebtoken');
const { checkPassword } = require('../helpers/bcrypt');
class UserController  {

  static register(req, res) {
    const form = req.body
    User
      .create({
        username: form.username,
        password: form.password,
        role: "client"
      })
      .then(user => {

        const token = jwt.sign({
          userId: user.id,
          username: user.username
        }, "rahasia")
        res.status(201).json({
          token
        })
      })
      .catch(next)
  }

  static login (req, res) {

    const form = req.body
    console.log(form)
    User
      .findOne({
        where: {
                if (user) {
          username: form.username
        }
      })
      .then(user => {
         const messageError = {
              name: 'ValidationError',
              errors: [{
                  message: 'email/password incorrect'
              }]
          }
        if (!user) {
          throw messageError
        } else {
          const isPasswordValid = checkPassword(form.password, user.password);
          if (!isPasswordValid) {
            throw messageError
          } else {
            const token = jwt.sign({
              userId: user.id,
              username: user.username
            }, 'rahasia')
            res.status(200).json({
              token
            })
          }
        }
      })
      .catch(next)
  }

}

module.exports = UserController

// {
//   "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInVzZXJuYW1lIjoiZHpha2tpIiwiaWF0IjoxNTg1NjIyNTY2fQ.AO_c3YoInUz0MJxMyJ-wwTxngahR5ytvN9LPHokJFtU"
// }