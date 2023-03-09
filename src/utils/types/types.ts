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

export interface MenteeType {
  id?: number;
  name?: string;
  address?: string;
  home_address?: string;
  email?: string;
  sex?: string;
  telegram?: string;
  phone?: string;
  discord?: string;
  status_id?: number;
  class_id?: number;
  class?: string;
  emergency_name?: string;
  emergency_phone?: string;
  emergency_status?: string;
  category?: string;
  major?: string;
  institution?: string;
}
