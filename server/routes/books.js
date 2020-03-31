const express = require('express');
const router = express.Router();
const BookController = require('../controllers/BookController');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');

router.get('/', authentication, BookController.getBooks);
router.get('/:id', [authentication, authorization], BookController.getBook);
// router.put('/:id', [authentication, authorization], BookController.update);
router.post('/', authentication, BookController.createBooks);

module.exports = router;
