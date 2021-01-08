// Imports

const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');
const bodyParser = require('body-parser');

const app = express();

// Port

const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// User request & Cards request

app.use(bodyParser.json());

app.use((req, res, next) => {
  req.user = {
    _id: '5ff781599a67a31d6d1cd6cf' // вставьте сюда _id созданного в предыдущем пункте пользователя
  };
  next();
});

app.use('/', cardsRouter);
app.use('/', usersRouter);
app.get('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});