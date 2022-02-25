var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('patient', { title: 'Patient', style: 'style.css' });
});

module.exports = router;