import "../styles/globals.css";
import type { AppProps } from 'next/app'
import {MenuContextProvider } from "@hooks/useMenu";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <MenuContextProvider>
        <Component {...pageProps} />
      </MenuContextProvider>
  )
}
