SELECT 
    patient_id,
    first_name,
    last_name,
    email_address,
    phone_number
FROM 
	patient
WHERE
    patient.patient_id = ?