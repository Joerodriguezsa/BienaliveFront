export interface AppointmentPayload {
  id: number;
  customerId: number;
  serviceId: number;
  appointmentDateStart: string;
  appointmentDateEnd: string;
  teamMemberId: number;
  statusId: number;
}

export interface Appointment extends AppointmentPayload {}
