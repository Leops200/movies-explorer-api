const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const Unauthorized = require('../errors/Unauthorized');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    email: {
      type: String,
      unique: true,
      require: true,
      validate: {
        validator: (email) => validator.isEmail(email),
        message: 'Неправильный адрес',
      },
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  {
    versionKey: false,
    statics: {
      findUserByCredentials(email, password) {
        return this.findOne({ email }).select('+password')
          .then((user) => {
            if (!user) {
              throw new Unauthorized('Неправильная почта или пароль');
            }
            return bcrypt.compare(password, user.password)
              .then((matched) => {
                if (!matched) {
                  throw new Unauthorized('Неправильная почта или пароль');
                }
                return user;
              });
          });
      },
    },
  },
);

module.exports = mongoose.model('user', userSchema);
