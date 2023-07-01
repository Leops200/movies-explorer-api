// === Статусы ===
const CODE = 200;
const CREATED_CODE = 201;
const ERROR_BAD_REQUEST_CODE = 400;
const ERROR_UNAUTHORIZED_CODE = 401;
const ERROR_FORBIDDEN_CODE = 403;
const ERROR_NOT_FOUND_CODE = 404;
const ERROR_CONFLICT_CODE = 409;
const ERROR_SERVER_CODE = 500;

// === Сообщения об обрабатываемых oшибках ===
const MOVIE_BAD_DATA_MSG = 'Hекорректные данные для создания карточки';
const MOVIE_FORBIDDEN_MSG = 'Недостаточно прав. Карточка другого пользователя';
const MOVIE_DELETE_NOT_FOUND_MSG = 'Карточка с таким ID не найдена';
const MOVIE_FIND_NOT_FOUND_MSG = 'Не найдены карточки пользователя';
const MOVIE_BAD_ID_MSG = 'Некорректный ID карточки';
const MOVIE_DELETE_MSG = 'Фильм удалён';
const URL_NOT_FOUND_MSG = 'Несуществующий URL';
const USER_NOT_FOUND_MSG = 'Пользователь с таким ID не найден';
const USER_BAD_ID_MSG = 'Некорректный ID пользователя';
const USER_BAD_DATA_MSG = 'Некорректные данные для редактирования профиля';
const AUTHORIZATION_MSG = 'Попробуйте авторизоваться';
const AUTHORIZATION_ERROR_MSG = 'Проверьте правильность логина или пароля';
const SIGNIN_MSG = 'Вход выполнен';
const SIGNOUT_MSG = 'Выход выполнен';
const SIGNUP_BAD_DATA_MSG = 'Некорректные данные для создания пользователя';
const SIGNUP_CONFLICT_MSG = 'Указанный email уже зарегистрирован. Используйте другой логин или авторизуйтесь';

module.exports = {
  CODE,
  CREATED_CODE,
  ERROR_BAD_REQUEST_CODE,
  ERROR_UNAUTHORIZED_CODE,
  ERROR_FORBIDDEN_CODE,
  ERROR_NOT_FOUND_CODE,
  ERROR_CONFLICT_CODE,
  ERROR_SERVER_CODE,
  MOVIE_DELETE_MSG,
  MOVIE_BAD_DATA_MSG,
  MOVIE_FORBIDDEN_MSG,
  MOVIE_DELETE_NOT_FOUND_MSG,
  MOVIE_FIND_NOT_FOUND_MSG,
  MOVIE_BAD_ID_MSG,
  URL_NOT_FOUND_MSG,
  USER_NOT_FOUND_MSG,
  USER_BAD_ID_MSG,
  USER_BAD_DATA_MSG,
  AUTHORIZATION_MSG,
  AUTHORIZATION_ERROR_MSG,
  SIGNIN_MSG,
  SIGNOUT_MSG,
  SIGNUP_BAD_DATA_MSG,
  SIGNUP_CONFLICT_MSG,
};
