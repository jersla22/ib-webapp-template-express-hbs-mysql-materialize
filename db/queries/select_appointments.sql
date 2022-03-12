SELECT 
    appointment_id,
    patient.first_name,
    patient.last_name,
    patient.phone_number,
    patient.email_address,
    DATE_FORMAT(appointment.date_dt, '%Y-%m-%d') as appointment_date, 
    DATE_FORMAT(appointment.date_dt, '%l:%i %p') as appointment_time, 
    appointment.length, 
    category.name as category, 
    appointment.description,
    status.name as status
FROM 
	patient, appointment, category, status
WHERE
    patient.patient_id = appointment.patient_id
    and appointment.category_id = category.category_id
    and appointment.status_id = status.status_id
ORDER BY patient.last_name