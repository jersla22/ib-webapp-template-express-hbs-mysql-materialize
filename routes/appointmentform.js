var express = require('express');
var router = express.Router();
const fs = require('fs');

const path = require('path');

const db = require("../db/db");

const get_patient_sql = fs.readFileSync(path.join(__dirname, "../db/queries/get_patient.sql"), "utf-8")
router.get('/:id', async function(req, res, next) {
  try {
    let patient_data = await db.queryPromise(get_patient_sql, [req.params.id]);
    console.log(patient_data);
    let appointment_new = patient_data[0]

    res.render('appointmentform', { title: 'Express', style: 'style.css' , appointment_new});;
  } catch (err) {
    next(err);
  }

});

const create_appointment_sql = fs.readFileSync(path.join(__dirname, "../db/queries/create_appointment.sql"), "utf-8")
router.post('/', async function(req, res, next){

  try{
  let appointment_new = await db.queryPromise(create_appointment_sql, [
    req.body.patient_id,
    req.body.category_id,
    `${req.body.appointment_date} ${req.body.appointment_time}`,
    req.body.length,
    req.body.description,
    req.body.status_id
  ])
  

  res.redirect(`/doctor`);

} catch (err) {
  next(err);
}

});

module.exports = router;