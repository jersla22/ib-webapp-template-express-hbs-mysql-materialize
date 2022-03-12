SELECT 
    appointment.appointment_id,
    patient.first_name,
    patient.last_name,
    category_id, 
    DATE_FORMAT(appointment.date_dt, '%Y-%m-%d') as appointment_date, 
    DATE_FORMAT(appointment.date_dt, '%l:%i %p') as appointment_time, 
    appointment.length,
    appointment.status_id, 
    appointment.description
FROM 
	patient, appointment
WHERE
    patient.patient_id = appointment.patient_id
    and appointment.appointment_id = ?