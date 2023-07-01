const NotFound = require('../errors/NotFound');

const { URL_NOT_FOUND_MSG } = require('../utils/utils');

module.exports.notFound = (req, res, next) => {
  next(new NotFound(URL_NOT_FOUND_MSG));
};
