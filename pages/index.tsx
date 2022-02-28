import type { NextPage } from 'next';
import Store from 'store/store';
import AddDb from 'components/AddDb';
import CreateList from 'components/CreateList';
import ShowList from 'components/ShowList';
import Head from 'next/head';
import Image from 'next/image';

const todos = new Store();

const Home: NextPage = () => {
  return (
    <div className="">
      {/* <AddDb /> */}

      <CreateList todos={todos} />
      <ShowList todos={todos} />
    </div>
  );
};

export default Home;
