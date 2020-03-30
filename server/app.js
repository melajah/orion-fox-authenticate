const express = require('express')
const app = express()
const port = 3000
const indexRoutes = require('./routes/index')
// const booksController = require('./controllers/books')

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/', indexRoutes)

// app.get('/books', booksController.getBooks)
// app.get('/books/:id', booksController.getBook)
// app.post('/books', booksController.createBooks)

app.listen(port, function() {
  console.log(`listening on port: ${port}`)
})
