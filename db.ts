import Dexie, { Table } from 'dexie';

export interface Content {
  id?: number;
  name: string;
  msg: string;
}

export class MyDexieClass extends Dexie {
  content!: Table<Content>;
  constructor() {
    super('myDatabase');
    this.version(1).stores({
      content: '++id, name, age' // Primary key and indexed props
    });
  }
}
