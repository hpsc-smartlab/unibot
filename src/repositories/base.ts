import { Writer, Reader } from './interfaces';

abstract class BaseRepository<T> implements Writer<T>, Reader<T> {
  create(item: T): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  update(id: number, item: T): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  find(conditions: any): Promise<T[]> {
    throw new Error('Method not implemented.');
  }
  findOne(conditions: any): Promise<T> {
    throw new Error('Method not implemented.');
  }
}
  
