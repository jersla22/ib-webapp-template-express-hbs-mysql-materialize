SELECT 
    patient.patient_id,
    patient.first_name,
    patient.last_name,
    patient.phone_number,
    patient.email_address
FROM 
	patient
ORDER BY patient.last_name