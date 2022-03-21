import { getProviders, getSession, useSession, signIn, signOut } from "next-auth/react";
import Head from 'next/head';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Login from '../components/Login';
import Modal from '../components/Modal';
import Widgets from "../components/Widgets";
import { useRecoilState } from "recoil";
import { modalState, postIdState } from "../atoms/modalAtom";


const Home = ({ trendingResults, followResults, providers }) => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  if (!session) return <Login providers={providers} />;

  return (
    <div className="">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        <Feed />

        {/* widgets */}
        <Widgets
          trendingResults={trendingResults}
          followResults={followResults}
        />
        {isOpen && <Modal />}
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const trendingResults = await fetch("https://jsonkeeper.com/b/NKEV").then(
    (res) => res.json()
  );
  const followResults = await fetch("https://jsonkeeper.com/b/WWMJ").then(
    (res) => res.json()
  );
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      trendingResults,
      followResults,
      providers,
      session,
    },
  };
}

export default Home
