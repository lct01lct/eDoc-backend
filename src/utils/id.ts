import { randomUUID } from 'crypto';

export const createId = () => {
  return randomUUID({ disableEntropyCache: true });
};
