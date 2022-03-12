var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

const db = require("../db/db");

const modify_appointment_sql = fs.readFileSync(path.join(__dirname, "../db/queries/modify_appointment.sql"), "utf-8")

router.get('/:id', async function(req, res, next) {
  try {
    let modify_data = await db.queryPromise(modify_appointment_sql, [req.params.id]);
    console.log(modify_data);
    let appointment_data = modify_data[0]

    res.render('modify', { title: 'Express', style: 'style.css' , appointment_data});;
  } catch (err) {
    next(err);
  }

});

const update_appointment_sql = fs.readFileSync(path.join(__dirname, "../db/queries/update_appointment.sql"), "utf-8")
router.post('/', async function(req, res, next){

  try{
  let results = await db.queryPromise(update_appointment_sql, [
    req.body.category_id,
    `${req.body.appointment_date} ${req.body.appointment_time}`,
    req.body.appointment_duration,
    req.body.appointment_description,
    req.body.status_id,
    req.body.appointment_id
  ])
  

  res.redirect(`/doctor`);

} catch (err) {
  next(err);
}

});

module.exports = router;