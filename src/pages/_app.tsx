import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemesProvider } from "contexts";

import "styles/globals.css";

const cache = createCache({
  key: "css",
  prepend: true,
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CacheProvider value={cache}>
      <ThemesProvider>
        <Head>
          <title>Home</title>
          <meta name="description" content="Home" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Component {...pageProps} />
        </main>
      </ThemesProvider>
    </CacheProvider>
  );
};

export default App;
