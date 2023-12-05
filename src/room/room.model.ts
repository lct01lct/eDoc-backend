import { Collection, ObjectId } from 'src/utils';

export class Room {
  private: boolean;
  master: ObjectId;
  secretKey?: string;
  members: ObjectId[];
}

export const RoomCollection = new Collection(Room);
