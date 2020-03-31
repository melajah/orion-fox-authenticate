const { Book, User } = require('../models');

class Books {
  static getBooks(req, res, next) {
    Book.findAll({
      where: {
        UserId: req.userId
      },
      include: [{
          model: User,
          required: false
      }],
    })
      .then((books) => {
        console.log(books, 'ini books');
        res.status(200).json({ books: books });
      })
      .catch(next);
  }

  static getBook(req, res, next) {
    const id = req.params.id;
    Book.findOne({ where: { id: id } })
      .then((book) => {
        if (book) {
          res.status(200).json({ book: book });
        } else {
          res.status(404).json({
            message: 'book not found',
          });
        }
      })
      .catch(next);
  }

  static createBooks(req, res, next) {
    console.log(req.userId, 'dari decoded')
    const { title, description } = req.body;
    console.log(req.body)
    Book.create({
      title,
      description: description,
      UserId: req.userId
    })
      .then((book) => {
        console.log(book, 'ini book hasil create');
        res.status(201).json({ book });
      })
      .catch(next);
  }
}

module.exports = Books;
