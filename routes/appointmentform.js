var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('appointmentform', { title: 'Express', style: 'style.css' });
});

module.exports = router;