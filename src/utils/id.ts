import { randomUUID } from 'crypto';

export type ObjectId = string;

export const createId = (): ObjectId => {
  return randomUUID({ disableEntropyCache: true });
};
