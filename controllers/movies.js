const { DocumentNotFoundError, ValidationError, CastError } = require('mongoose').Error;

const Movie = require('../models/movies');

const {
  CREATED_CODE,
  MOVIE_BAD_DATA_MSG,
  MOVIE_FORBIDDEN_MSG,
  MOVIE_DELETE_MSG,
  MOVIE_DELETE_NOT_FOUND_MSG,
  MOVIE_FIND_NOT_FOUND_MSG,
  MOVIE_BAD_ID_MSG,
} = require('../utils/utils');

const Forbidden = require('../errors/Forbidden');
const NotFound = require('../errors/NotFound');
const BadRequest = require('../errors/BadRequest');

//= =====================================================

module.exports.getOwnMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((cards) => res.send(cards))
    .catch((err) => {
      if (err instanceof DocumentNotFoundError) {
        next(new NotFound(MOVIE_FIND_NOT_FOUND_MSG));
      } else { next(err); }
    });
};
//= =====================================================

module.exports.createCardMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;
  const ownerId = req.user._id;
  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
    owner: ownerId,
  })
    .then((card) => res.status(CREATED_CODE).send(card))
    .catch((err) => {
      if (err instanceof ValidationError) {
        next(new BadRequest(MOVIE_BAD_DATA_MSG));
      } else { next(err); }
    });
};

//= =====================================================

module.exports.deleteCardMovie = (req, res, next) => {
  Movie.findById(req.params.cardId)
    .orFail()
    .then((card) => {
      if (card.owner.toString() === req.user._id) {
        card.deleteOne();
        res.send({ message: MOVIE_DELETE_MSG });
      } else { throw new Forbidden(MOVIE_FORBIDDEN_MSG); }
    })
    .catch((err) => {
      if (err instanceof DocumentNotFoundError) {
        next(new NotFound(MOVIE_DELETE_NOT_FOUND_MSG));
      } else if (err instanceof CastError) {
        next(new BadRequest(MOVIE_BAD_ID_MSG));
      } else { next(err); }
    });
};
