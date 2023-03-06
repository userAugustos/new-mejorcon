import { Header } from "@components/header";
import Head from "next/head";
import {MenuContextProvider, useMenuContext} from "@hooks/useMenu";
import {Menu} from "@components/menu";
import Recomended from "@components/Recomended";
import {GetStaticProps} from "next";
import {IPost} from "@pages/post/post.types";

export default function Index({ postsByRelevance }: { postsByRelevance: { data: IPost[], pages?: number, size?: number } } ) {
    const { menuIsOpen } = useMenuContext()
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
        { menuIsOpen ? <Menu /> : <Recomended posts={postsByRelevance} /> }
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {
    const postsByRelevance = await fetch("https://api.beta.mejorconsalud.com/wp-json/mc/v2/posts?orderby=relevance").then(response => response.json())
    return {
        props: {
            postsByRelevance,
        },
    };
};
