module.exports = function getHealthz(req, res) {
  // dapat juga menggunakan res.box
  res.xsend('OK');
};
