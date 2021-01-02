const router = require('express').Router();
const fs = require('fs').promises;
const path = require('path');
const bodyParser = require('body-parser');

const dataPath = path.join(__dirname, '../data/users.json');

router.get('/users', (req, res) => {
  fs.readFile(dataPath)
    .then((users) => {
      res.status(200).send(JSON.parse(users));
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.get('/users/:id', (req, res) => {
  fs.readFile(dataPath)
    .then((data) => {
      const users = JSON.parse(data);
      users.forEach((user) => {
        if (user._id === req.params.id) {
          res.status(200).send(user);
        }
      });
      res.status(404).send({ message: 'Нет пользователя с таким id' });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// .then((data) => {
//   const users = JSON.parse(data);
//   users.forEach((user) => {
//     if (user._id === req.params.id) {
//       res.status(200).send(user);
//       return;
//     };
//   })
// })

module.exports = router;
