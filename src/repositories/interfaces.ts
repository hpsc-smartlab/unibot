export interface Writer<T> {
  create(item: T): Promise<boolean>;
  update(id: number, item: T): Promise<boolean>;
  delete(id: number): Promise<boolean>;
}

export interface Reader<T> {
  find(conditions: any): Promise<T[]>;
  findOne(conditions: any): Promise<T>;
}
