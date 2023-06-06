const router = require('express').Router();

const users = require('./users');
const movies = require('./movies');
const notFound = require('./notFound');
const signin = require('./signin');
const signup = require('./signup');
const signout = require('./signout');
const auth = require('../middlewares/auth');

router.use('/users', auth, users);
router.use('/movies', auth, movies);
router.use('/signin', signin);
router.use('/signup', signup);
router.use('/signout', auth, signout);
router.use('*', auth, notFound);

module.exports = router;
