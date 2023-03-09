export interface MentorType {
  id?: number;
  name?: string;
}

export interface ClassType {
  id?: number;
  name?: string;
  mentor?: string;
  start_date?: string;
  end_date?: string;
}
