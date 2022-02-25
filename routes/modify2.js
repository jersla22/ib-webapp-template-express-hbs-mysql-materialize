var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('modify2', { title: 'Express', style: 'style.css' });
});

module.exports = router;