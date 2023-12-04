import { Injectable } from '@nestjs/common';
import { Room } from './room.model';
import { createId } from 'src/utils';
import { User } from 'src/user/user.model';

@Injectable()
export class RoomService {
  createRoom(master: User, secretKey: string): Room {
    const room: Room = {
      id: createId(),
      private: !!secretKey,
      secretKey,
      master: master.id,
      members: [master.id],
    };

    return room;
  }
}
