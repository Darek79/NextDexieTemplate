import Store from './store';

import { createContext, useContext } from 'react';

const store = {
  todos: Store()
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext<typeof store>(StoreContext);
}

export default store;
