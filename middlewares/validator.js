const { Joi, celebrate } = require('celebrate');

// === Валидация создания пользователя ==========
module.exports.createUserValidator = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

// === Валидация логина пользователя ==========
module.exports.loginUserValidator = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

// === Валидация редактирования пользователя ===
module.exports.updateUserValidator = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().required().email(),
  }),
});

// === Валидация создания карточки фильма ==========
module.exports.createMovieCardValidator = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required().trim(),
    director: Joi.string().required().trim(),
    duration: Joi.number().required(),
    year: Joi.string().required().trim(),
    description: Joi.string().required().trim(),
    image: Joi.string().required().uri().trim(),
    trailerLink: Joi.string().required().uri().trim(),
    thumbnail: Joi.string().required().uri().trim(),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required().trim(),
    nameEN: Joi.string().required().trim(),
  }),
});

// === Валидация удаления карточки фильма ==========
module.exports.deleteMovieCardValidator = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().required().hex().length(24),
  }),
});
