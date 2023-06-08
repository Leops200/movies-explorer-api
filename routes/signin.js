const router = require('express').Router();

const { login } = require('../controllers/users');
const { loginUserValidator } = require('../middlewares/validator');

router.post('/', loginUserValidator, login);

module.exports = router;
