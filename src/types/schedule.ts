export interface Schedule {
  id: number;
  teamMemberId: number;
  scheduleDate: string;
  startTime: string;
  endTime: string;
}

export interface SchedulePayload {
  teamMemberId: number;
  scheduleDate: string;
  startTime: string;
  endTime: string;
}
