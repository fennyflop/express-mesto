const router = require('express').Router();
const {
  updateUser, updateAvatar, getUsers, getUser, createUser, login
} = require('../controllers/users');

router.patch('/users/me/avatar', updateAvatar);
router.patch('/users/me', updateUser);
router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.post('/signup', createUser);
router.post('/signin', login);

module.exports = router;
