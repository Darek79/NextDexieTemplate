import Store from 'store/store';
import { v4 as uuidv4 } from 'uuid';

import { ChangeEvent, FormEvent, SyntheticEvent, useState } from 'react';
interface ShowListI {
  todos: Store;
}
interface Properties {
  test?: string;
}

// interface Data extends HTMLFormElement {
//   readonly elements: Properties;
// }

export default function CreateList({ todos }: ShowListI): JSX.Element {
  const [state, setState] = useState<string>('');
  // function addStuff(e: ChangeEvent<HTMLInputElement>) {
  //   e.preventDefault();

  //   setState(e.currentTarget.value);
  //   console.log(e.currentTarget.value);
  // }

  function addTodo(e: SyntheticEvent) {
    e.preventDefault();
    const target = e.currentTarget as typeof e.currentTarget & {
      test: { value: string };
    };
    console.log(target.test.value);

    todos.addItem(target.test.value, uuidv4());
  }
  return (
    <div>
      <form method="post" onSubmit={e => addTodo(e)}>
        <div className="">
          <label htmlFor="test">some text to add</label>
          <input
            // onChange={e => addStuff(e)}
            // value={state}
            tabIndex={0}
            className="border-2 border-blue-200"
            name="test"
            id="test"
            type="text"
          />
        </div>
        <button type="submit">add stuff</button>
      </form>
    </div>
  );
}
