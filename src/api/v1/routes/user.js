const router = require('express').Router();
const UserController = require('../controllers/user');

router.post('/signup', UserController.signup);
router.post('/login', UserController.login);
router.get('/', UserController.readUser);
router.patch('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;