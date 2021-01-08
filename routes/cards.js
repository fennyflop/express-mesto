const router = require('express').Router();
const {
  likeCard, dislikeCard, getCards, deleteCard, createCard,
} = require('../controllers/cards');

router.put('/cards/:cardId/likes', likeCard);
router.delete('/cards/:cardId/likes', dislikeCard);
router.get('/cards', getCards);
router.delete('/cards/:cardId', deleteCard);
router.post('/cards', createCard);

module.exports = router;
