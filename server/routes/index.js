const express = require('express');
const router = express.Router();
const bookRoutes = require('./books');
const UserController = require('../controllers/UserController')
const errorHandler = require('../middlewares/errorHandler');

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.use('/books', bookRoutes);

router.use(errorHandler)

module.exports = router;
