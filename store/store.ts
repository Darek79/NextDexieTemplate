import { action, makeAutoObservable, makeObservable, observable } from 'mobx';

export interface MyTodo {
  id: string;
  msg: string;
  isDone: boolean;
}

function Store() {
  return makeAutoObservable({
    list: [] as MyTodo[],
    addItem(msg: string, id: string) {
      this.list.push({ id: id, msg: msg, isDone: false });
    },
    removeItem(todo: MyTodo) {
      this.list = this.list.filter(el => el.id !== todo.id);
    },
    toggle(todo: MyTodo) {
      todo.isDone = !todo.isDone;
    }
  });
}

// class Store {
//   list: MyTodo[] = [];
//   constructor() {
//     makeObservable(this, {
//       list: observable,
//       addItem: action,
//       removeItem: action,
//       toggle: action
//     });
//   }

//   addItem(msg: string, id: string) {
//     this.list.push({ id: id, msg: msg, isDone: false });
//   }
//   removeItem(todo: MyTodo) {
//     this.list = this.list.filter(el => el.id !== todo.id);
//   }
//   toggle(todo: MyTodo) {
//     todo.isDone = !todo.isDone;
//   }
// }

export default Store;
