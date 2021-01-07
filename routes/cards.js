const router = require('express').Router();
const fs = require('fs').promises;
const path = require('path');
const { getCards, deleteCard, createCard } = require('../controllers/cards');

const dataPath = path.join(__dirname, '../data/cards.json');

router.get('/cards', getCards);
router.delete('/cards/:cardId', deleteCard)
router.post('/cards', createCard);

module.exports = router;
