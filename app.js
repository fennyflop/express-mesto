// Imports

const express = require('express');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');
const app = express();

// Port

const { PORT = 3000 } = process.env;

// Front page

app.use(express.static(__dirname + '/public'));

// User request & Cards request

app.use('/', cardsRouter);
app.use('/', usersRouter);
app.get('*', (req, res) => {
  res.status(404).send({ "message": "Запрашиваемый ресурс не найден" });
});

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
