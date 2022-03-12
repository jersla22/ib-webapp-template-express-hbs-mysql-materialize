INSERT into appointment 
(patient_id, category_id, date_dt, length, description, status_id) 
VALUES(?, ?, STR_TO_DATE( ?, '%Y-%m-%d %l:%i %p'), ?, ?, ?)
