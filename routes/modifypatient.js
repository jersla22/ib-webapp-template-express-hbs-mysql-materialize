var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

const db = require("../db/db");

const modify_patient_sql = fs.readFileSync(path.join(__dirname, "../db/queries/modify_patient.sql"), "utf-8")

router.get('/:id', async function(req, res, next) {
  try {
    let modify_patient_data = await db.queryPromise(modify_patient_sql, [req.params.id]);
    console.log(modify_patient_data);
    let mod_patient_data = modify_patient_data[0]

    res.render('modifypatient', { title: 'Express', style: 'style.css' , mod_patient_data});;
  } catch (err) {
    next(err);
  }

});

const update_patient_sql = fs.readFileSync(path.join(__dirname, "../db/queries/update_patient.sql"), "utf-8")
router.post('/', async function(req, res, next){

  try{
  let results = await db.queryPromise(update_patient_sql, [
    req.body.first_name,
    req.body.last_name,
    req.body.email_address,
    req.body.phone_number,
    req.body.patient_id
  ])
  

  res.redirect(`/list`);

} catch (err) {
  next(err);
}

});

module.exports = router;