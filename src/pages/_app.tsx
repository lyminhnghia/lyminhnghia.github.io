import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import React from "react";
import type { AppProps } from "next/app";

import "styles/globals.css";

const cache = createCache({
  key: "css",
  prepend: true,
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CacheProvider value={cache}>
      <Component {...pageProps} />
    </CacheProvider>
  );
};

export default App;
