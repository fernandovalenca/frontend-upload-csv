import AppContextProvider from "@/context/appContext";
import type { AppProps } from "next/app";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}
