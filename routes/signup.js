const router = require('express').Router();

const { createUser } = require('../controllers/users');
const { createUserValidator } = require('../middlewares/validator');

router.post('/', createUserValidator, createUser);

module.exports = router;
