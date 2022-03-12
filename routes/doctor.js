var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

const db = require("../db/db");

const select_appointments_sql = fs.readFileSync(path.join(__dirname, "../db/queries/select_appointments.sql"), "utf-8")

router.get('/', async function(req, res, next) {
  try {
    let appointments_data = await db.queryPromise(select_appointments_sql);
    console.log(appointments_data);
    res.render('doctor', { title: 'Doctor', style: 'style.css' , appointments: appointments_data});;
  } catch (err) {
    next(err);
  }

});

let delete_appointment_str = `
DELETE
FROM appointment
WHERE 
    appointment_id = ?
`
router.get("/:appointment_id/delete", async function(req, res, next) {
  try{
    let appointment_id = req.params.event_id;

    let results = await db.queryPromise(delete_appointment_sql, [appointment_id])

    res.redirect("/doctor");
  } catch(err){
    next(err);
  }

});

module.exports = router;