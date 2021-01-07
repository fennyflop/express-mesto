const Card = require('../models/card');

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: 'Произошла ошибка' })
    })
}

module.exports.deleteCard = (req, res, next) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => { res.status(200).send({ data: card }) })
    .catch((err) => { res.status(500).send({ message: 'Произошла ошибка' }) });
}

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then((card) => {
      res.status(200).send({ data: card });
    })
    .catch((err) => {
      res.status(500).send(err);
    })
}
