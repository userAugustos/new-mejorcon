import "../styles/globals.css";
import type { AppProps } from 'next/app'
import {MenuContextProvider} from "@hooks/useMenu";
import {Header} from "@components/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <MenuContextProvider>
          <Header />
          <Component {...pageProps} />
      </MenuContextProvider>
  )
}
