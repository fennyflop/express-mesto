const User = require('../models/user');

module.exports.updateAvatar = (req, res) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(req.user._id, { avatar }, {
    new: true, // обработчик then получит на вход обновлённую запись
    runValidators: true, // данные будут валидированы перед изменением
    upsert: true, // если пользователь не найден, он будет создан
  })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch(() => {
      res.status(500).send({ message: 'На сервере произошла ошибка' });
    });
};

module.exports.updateUser = (req, res) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(req.user._id, { name, about }, {
    new: true, // обработчик then получит на вход обновлённую запись
    runValidators: true, // данные будут валидированы перед изменением
    upsert: true, // если пользователь не найден, он будет создан
  })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch(() => {
      res.status(500).send({ message: 'На сервере произошла ошибка' });
    });
};

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch(() => {
      res.status(500).send({ message: 'На сервере произошла ошибка' });
    });
};

module.exports.getUser = (req, res) => {
  User.findById(req.params.id)
    .then((data) => {
      if (data) {
        res.status(200).send(data);
      } else {
        res.status(404).send({ message: "Пользователь не найден" });
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(404).send({ message: "Пользователь не найден" });
      } else {
        res.status(500).send({ message: 'На сервере произошла ошибка' });
      }
    });
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.status(200).send({ data: user }))
    .catch(() => res.status(500).send({ message: 'На сервере произошла ошибка' }));
};
