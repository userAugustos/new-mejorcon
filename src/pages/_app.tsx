import "../styles/globals.css";
import type { AppProps } from 'next/app'
import {MenuContextProvider} from "@hooks/useMenu";
import {Header} from "@components/header";
import { SearchContextProvider } from "@hooks/useSearch";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <MenuContextProvider>
				<SearchContextProvider>
          <Header />
          <Component {...pageProps} />
				</SearchContextProvider>
      </MenuContextProvider>
  )
}
