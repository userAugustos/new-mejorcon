import Head from "next/head";
import { useMenuContext} from "@hooks/useMenu";
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
            <link rel="icon" type="image/png" href="https://cdn.atomik.vip/themes/mcs/favicon.png"/>
            <meta name="description" content="Revista sobre bons hábitos saude e cuidados pessoais, artigos sobre mundo fitness" />
            {/*og tags*/}
            <meta name="og:title" property="og:title" content="Mejor con Salud" />
            <meta property="og:description" content="Revista sobre bons hábitos saude e cuidados pessoais, artigos sobre mundo fitness" />
            <meta property="og:image" content="https://cdn.atomik.vip/themes/mcs/es/logo.svg?auto=webp&quality=45&width=1920&crop=16:9,smart,safe" />
            <meta property="og:type" content="blog" />
            <meta property="og:url" content="https://mejorconsalud.as.com/" />
        </Head>
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
