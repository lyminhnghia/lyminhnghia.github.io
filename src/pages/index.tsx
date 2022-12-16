import Head from "next/head";

import { HomePageLayout } from "layouts";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomePageLayout />
      </main>

      <footer>footer</footer>
    </div>
  );
};

export default Home;
