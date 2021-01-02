const router = require('express').Router();
const fs = require('fs').promises;
const path = require('path');

const dataPath = path.join(__dirname, '../data/cards.json');

router.get('/cards', (req, res) => {
  fs.readFile(dataPath)
    .then((data) => {
      res.status(200).send(JSON.parse(data));
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
