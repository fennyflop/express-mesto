const Card = require('../models/card');

module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } }, // добавить _id в массив, если его там нет
    { new: true },
  )
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } }, // убрать _id из массива
    { new: true },
  )
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch(() => {
      res.status(500).send({ message: 'На сервере произошла ошибка' });
    });
};

module.exports.deleteCard = (req, res) => {
  const cardId = req.params.cardId;

  Card.findById(cardId)
    .then((card) => {
      if (card.owner._id.toString() === req.user._id.toString()) {
        Card.findByIdAndRemove()
          .then((deletedCard) => {
            res.status(200).send({ deletedCard });
          })
          .catch((err) => {
            res.status(500).send({ err });
          })
      } else {
        return Promise.reject('Данная карточка вам не принадлежит');
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    })
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then((card) => {
      res.status(200).send({ data: card });
    })
    .catch((err) => {
      res.status(500).send({ err });
    });
};
