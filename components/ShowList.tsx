import { observer } from 'mobx-react-lite';
import Store from './../store/store';
import { useStore } from 'store/context';
interface ShowListI {
  todos: Store;
}

function ShowList(): JSX.Element {
  const { todos } = useStore();
  return (
    <ul>
      {console.log(todos, 'TODOS')}
      {todos.list.map(el => (
        <li key={el.msg}>{el.msg}</li>
      ))}
    </ul>
  );
}

export default observer(ShowList);
