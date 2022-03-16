var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

const db = require("../db/db");

const select_patients_sql = fs.readFileSync(path.join(__dirname, "../db/queries/select_patients.sql"), "utf-8")

router.get('/', async function(req, res, next) {
  try {
    let patients_data = await db.queryPromise(select_patients_sql);
    console.log(patients_data);
    res.render('list', { title: 'List', style: 'style.css' , patients: patients_data});;
  } catch (err) {
    next(err);
  }

});

const delete_patient_sql = fs.readFileSync(path.join(__dirname, "../db/queries/delete_patient.sql"), "utf-8")

router.get("/:patient_id/delete", async function(req, res, next) {
  try{
    let patient_id = req.params.patient_id;

    let results = await db.queryPromise(delete_patient_sql, [patient_id])

    res.redirect("/list");
  } catch(err){
    next(err);
  }

});

module.exports = router;