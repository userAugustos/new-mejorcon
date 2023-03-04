import { useRouter } from "next/router";
import Head from "next/head";
import {GetServerSideProps, GetStaticProps} from "next";
import {fetch} from "next/dist/compiled/@edge-runtime/primitives/fetch";
import { IPost } from "./post.types"
export default function Post({ post }: { post: IPost }) {
    return (
        <>
            <Head>
                <title></title>
                <meta name="description" content="" />
                <meta name="og:title" property="og:title" content="" />
            </Head>
            Post {post.id}
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    console.debug(query)

    // const response = await fetch('https://api.beta.mejorconsalud.com/wp-json/mc/v2/posts?search=calabazas')
    // https://api.beta.mejorconsalud.com/wp-json/mc/v1/posts/406721
    return {
        props: {
            post: {
                id: ''
            }
        }
    }
}
