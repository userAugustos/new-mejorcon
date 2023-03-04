import { Header } from "@components/header";
import Head from "next/head";

export default function Index() {
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
        <div className="p-4 m-3">
            hello
        </div>
    </>
  )
}
