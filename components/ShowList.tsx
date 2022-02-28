import { observer } from 'mobx-react-lite';
import Store from './../store/store';
interface ShowListI {
  todos: Store;
}

function ShowList({ todos }: ShowListI): JSX.Element {
  return (
    <ul>
      {console.log(todos, 'TODOS')}
      {todos.list.map(el => (
        <li key={el.msg}>{el.msg}</li>
      ))}
    </ul>
  );
}

export default observer(ShowList)