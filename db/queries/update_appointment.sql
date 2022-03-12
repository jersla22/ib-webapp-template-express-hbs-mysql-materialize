UPDATE appointment 
SET 
    category_id = ?, 
    date_dt = STR_TO_DATE( ?, '%Y-%m-%d %l:%i %p'), 
    length = ?, 
    description = ?,
    status_id = ?
WHERE
    appointment_id = ?