export interface TeamMember {
  id: number;
  photo?: string | null;
  userId?: number | null;
  personalExperience?: string | null;
  degree?: string | null;
  aboutMe?: string | null;
  name?: string | null;
  email?: string | null;
  username?: string | null;
  roleId?: number | null;
}

export interface TeamMemberPayload {
  photo?: string | null;
  userId: number | null;
  personalExperience?: string | null;
  degree?: string | null;
  aboutMe?: string | null;
}
