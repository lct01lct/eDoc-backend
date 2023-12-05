import { Collection, Document } from '../utils';

export class User {
  username: string;
  belongRoom?: string;
}

export const UserCollection = new Collection(User);
export type UserDocument = Document<User>;
