import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { createId } from 'src/utils';

@Injectable()
export class UserService {
  createUser(username): User {
    return {
      username,
      id: createId(),
    };
  }
}
