const { Book, User } = require('../models');

class Books {
  static getBooks(req, res) {
    Book.findAll({
      include: [{
          model: User,
          required: false
      }],
    })
      .then((books) => {
        console.log(books, 'ini books');
        res.status(200).json({ books: books });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }

  static getBook(req, res) {
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
      .catch((err) => {
        console.log(err, 'ini error get book');
        res.status(500).json(err);
      });
  }

  static createBooks(req, res) {
    const { title, description } = req.body;
    console.log(req.body)
    Book.create({
      title,
      description: description,
      UserId: 1
    })
      .then((book) => {
        console.log(book, 'ini book hasil create');
        res.status(201).json({ book });
      })
      .catch((err) => {
        console.log(err, 'ini error create book');
        res.status(500).json(err);
      });
  }
}

module.exports = Books;
