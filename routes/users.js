const router = require('express').Router();
const { updateUserValidator } = require('../middlewares/validator');
const {
  getProfile,
  updateProfil,
} = require('../controllers/users');

router.get('/me', getProfile);

router.patch('/me', updateUserValidator, updateProfil);

module.exports = router;
