import { Injectable } from '@nestjs/common';
import { RoomCollection } from './room.model';
import { UserDocument } from 'src/user/user.model';

@Injectable()
export class RoomService {
  createRoom(master: UserDocument, secretKey: string) {
    const room = RoomCollection.create({
      private: !!secretKey,
      secretKey,
      master: master.id,
      members: [master.id],
    });

    return room;
  }
}
