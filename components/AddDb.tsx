import { db } from './../db';
import { FormEvent, useState } from 'react';

interface Properties extends HTMLFormControlsCollection {
  test?: HTMLInputElement;
}

interface Data extends HTMLFormElement {
  readonly elements: Properties;
}

interface AddDbI {}

export default function AddDb(): JSX.Element {
  const [state, setState] = useState('');

  async function addStuff(e: FormEvent<Data>) {
    e.preventDefault();

    try {
      const id = await db.content.add({
        name: 'darek',
        msg: e.currentTarget.elements.test?.value!
      });
    } catch (e) {
      if (e) console.log(e);
    }
  }
  return (
    <div>
      <form method="post" onSubmit={e => addStuff(e)}>
        <div className="">
          <label htmlFor="test">some text to add</label>
          <input
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
