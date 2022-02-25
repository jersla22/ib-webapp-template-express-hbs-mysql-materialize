var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('doctor', { title: 'Doctor', style: 'style.css' });
});

module.exports = router;