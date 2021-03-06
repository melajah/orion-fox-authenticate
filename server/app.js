const express = require('express');
const app = express();
const port = 3000;
const indexRoutes = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRoutes);

app.listen(port, function() {
  console.log(`listening on port: ${port}`);
});
