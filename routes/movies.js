const router = require('express').Router();
const {
  deleteMovieCardValidator,
  createMovieCardValidator,
} = require('../middlewares/validator');

const {
  getOwnMovies,
  createCardMovie,
  deleteCardMovie,
} = require('../controllers/movies');

router.get('/', getOwnMovies);
router.post('/', createMovieCardValidator, createCardMovie);

router.delete('/:cardId', deleteMovieCardValidator, deleteCardMovie);

module.exports = router;
