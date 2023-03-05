import { Header } from "@components/header";
import Head from "next/head";
import {MenuContextProvider, useMenuContext} from "@hooks/useMenu";
import {Menu} from "@components/menu";
import {Recomended} from "@components/Recomended";

export default function Index() {
    const { menuIsOpen } = useMenuContext()
    console.debug("state of menu in home", menuIsOpen)
  return (
    <>
        <Head>
            <title>Mejor con Salud</title>
            <meta name="description" content="Revista sobre bons hábitos saude e cuidados pessoais, artigos sobre mundo fitness" />
            {/*og tags*/}
            <meta name="og:title" property="og:title" content="Mejor con Salud" />
            <meta name="og:type" content="article." />
        </Head>
      <Header />
        <div>
            { menuIsOpen ? <Menu /> : <Recomended /> }
        </div>
    </>
  )
}
