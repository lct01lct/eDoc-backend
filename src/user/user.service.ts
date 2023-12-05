import { Injectable } from '@nestjs/common';
import { UserCollection } from './user.model';

@Injectable()
export class UserService {
  createUser(username: string) {
    const newUser = UserCollection.create({
      username,
    });
    return newUser;
  }
}
