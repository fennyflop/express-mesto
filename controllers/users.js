const User = require('../models/user');

module.exports.getUsers = (req, res, next) => {
  User.find({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: 'Произошла ошибка' })
    })
}

module.exports.getUser = (req, res, next) => {
  User.findById(req.params.id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: 'Произошла ошибка' })
    })
}

module.exports.createUser = (req, res, next) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then(user => res.status(200).send({ data: user }))
    .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
};
