UPDATE patient 
SET 
    first_name = ?, 
    last_name = ?, 
    email_address = ?,
    phone_number = ?
WHERE
    patient_id = ?