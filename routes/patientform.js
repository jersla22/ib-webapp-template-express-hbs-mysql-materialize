var express = require('express');
var router = express.Router();
const fs = require('fs');

const path = require('path');

const db = require("../db/db");

const create_patient_sql = fs.readFileSync(path.join(__dirname, "../db/queries/create_patient.sql"), "utf-8")

router.get('/', function(req, res, next) {
  res.render('patientform', { title: 'Express', style: 'style.css' });
});


router.post('/', async function(req, res, next){

  try{
  let patient_data = await db.queryPromise(create_patient_sql, [
    req.body.first_name,
    req.body.last_name,
    req.body.email_address,
    req.body.phone_number
  ])
  

  res.redirect(`/list`);

} catch (err) {
  next(err);
}

});

module.exports = router;