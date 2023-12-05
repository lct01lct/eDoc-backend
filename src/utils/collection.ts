import { Type } from '@nestjs/common';
import { ObjectId, createId } from './id';

export class Collection<
  TClass extends Type<object>,
  TInstance extends Document<object> = Document<InstanceType<TClass>>,
> {
  static collections: Collection<Type<object>>[] = [];

  private store = new Set<TInstance>();

  constructor(private model: TClass) {
    if (Collection.collections.includes(this)) {
      throw new Error(`${model.name} existed!`);
    }
    Collection.collections.push(this);
  }

  create(opt: InstanceType<TClass>): TInstance {
    const newObject = Object.assign(
      {
        id: createId(),
      },
      opt,
    ) as TInstance;
    this.store.add(newObject);

    return newObject;
  }

  find(id: ObjectId): TInstance | null {
    return Array.from(this.store).find((item) => item.id === id);
  }
}

export type Document<T extends object> = T & { id: ObjectId };
