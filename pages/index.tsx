import type { NextPage } from 'next';
import Store from 'store/store';
import AddDb from 'components/AddDb';
import CreateList from 'components/CreateList';
import ShowList from 'components/ShowList';
import Head from 'next/head';
import Image from 'next/image';
import store, { StoreContext } from 'store/context';

const Home: NextPage = () => {
  return (
    <StoreContext.Provider value={store}>
      <div className="">
        <CreateList />
        <ShowList />
      </div>
    </StoreContext.Provider>
  );
};

export default Home;
