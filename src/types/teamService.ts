export interface TeamService {
  id: number;
  teamMemberId: number;
  serviceId: number;
}

export interface TeamServicePayload {
  teamMemberId: number;
  serviceId: number;
}
