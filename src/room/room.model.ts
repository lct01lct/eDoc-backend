import { User } from 'src/user/user.model';

export interface Room {
  readonly id: string;
  private: boolean;
  master: string;
  secretKey?: string;
  members: string[];
}
