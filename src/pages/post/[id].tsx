import { useRouter } from "next/router";
import Head from "next/head";

export default function Post() {
    const router = useRouter()
    const { id } = router.query
    return (
        <>
            <Head>
                <title></title>
                <meta name="description" content="" />
                <meta name="og:title" property="og:title" content="" />
            </Head>
            Post {id}
        </>
    )
}
