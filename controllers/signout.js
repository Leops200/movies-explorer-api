module.exports.logout = (req, res) => {
  res.clearCookie('jwt');
  res.send({ message: 'Выход выполнен' });
};
