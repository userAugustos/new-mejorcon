import  CategorySVG from '/category.svg'
import Image from 'next/image'
import Head from "next/head";
import {GetServerSideProps} from "next";
import {fetch} from "next/dist/compiled/@edge-runtime/primitives/fetch";
import { singlePost} from "./post.types"
import { Menu } from '@components/menu'
import {convertDate} from "../../utils/convertDate";
import {useMenuContext} from "@hooks/useMenu";
import {useEffect} from "react";
export default function Post({ post }: { post: singlePost }) {
    let { menuIsOpen, closeMenu } = useMenuContext()

    useEffect(() => {
      closeMenu()
    }, [])

    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name="title" content={post.metas.title} />
                <meta itemProp="image" content={post.metas["og:image"]} />
                <meta name="description" content={post.metas.description} />

                <meta name="og:title" property="og:title" content={post.metas.title} />
                <meta property="og:description" content={post.metas["og:description"]} />
                <meta property="og:image" content={post.metas["og:image"]} />
                <meta property="og:type" content={post.metas["og:type"]} />
                <meta property="og:url" content={post.link} />

                {/* midias */}
                <meta property="twitter:card" content={post.metas["og:image"]} />
                <meta property="twitter:url" content={post.link} />
                <meta property="twitter:title" content={post.metas.title} />
                <meta property="twitter:description" content={post.metas["og:description"]} />
                <meta property="twitter:image" content={post.metas["og:image"]} />
            </Head>
            {
                menuIsOpen ?
                    <Menu />
                    :
                    <div className="container mt-2 p-6 grid grid-cols-3 grid-rows-1 w-full lg:max-w-[1600px]">
                        <div className="header flex flex-col items-start justify-start col-span-3 lg:col-span-2 lg:pl-10 lg:pt-10">
                            <h1 className="text-[#419fb9] text-4xl font-bold" >{post.title}</h1>
                            <section className="w-full my-4 p-2 flex flex-row justify-start  items-start">
                                <section className="flex flex-row justify-start items-center">
                                    <img alt="category icon" src="/category.svg" width={20}/>
                                {post.categories.map(categorie => (
                                    <span className="text-blue-500 category mr-6 py-1 px-2 rounded-b-md cursor-pointer border-gray-400" key={categorie.id}>
                                        #{categorie.name}
                                    </span>
                                ))}
                                </section>
                                <section className="flex flex-row justify-start items-center ">
                                    <img alt="category icon" src="/calendar.svg" width={20}/>
                                    <span className="text-gray-500 px-2 text-center">{convertDate(post.published)}</span>
                                </section>
                            </section>
                            <div className="relative content-container" dangerouslySetInnerHTML={{__html: post.content}}></div>
                        </div>

                        {/*author/post data*/}
                        <div className="col-span-0 px-4 lg:col-span-1 max-h-[500px] flex flex-col justify-start items-center">
                            <section className="flex items-center p-4 bg-white rounded-lg shadow-xs">
                                {
                                    post.author.picture && (
                                        <div className="mr-4 text-blue-500">
                                            <Image className="rounded-full" src={post.author.picture} alt="author photo" width={100} height={100}/>
                                        </div>
                                    )
                                }
                                <div>
                                    <p className="mb-2 text-lg font-semibold text-gray-700">
                                        {post.author.name}
                                    </p>
                                    <p className="text-sm font-medium text-gray-600">
                                        {post.author.profession}
                                    </p>
                                </div>
                            </section>
                            <section className="bibliography my-3 flex items-center p-4 bg-white rounded-lg shadow-xs text-wrap" dangerouslySetInnerHTML={{__html: post.bibliography}}></section>
                            <section className="flex justify-between items-center">
                                { post.tags.length > 0 && post.tags?.map(tag => (
                                    <span key={tag.id}  className="text-gray-500 hover:text-black">@{tag.name}</span>
                                )) }
                            </section>
                        </div>
                    </div>
            }
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    console.debug(query.id)

    const response = await fetch(`https://api.beta.mejorconsalud.com/wp-json/mc/v2/posts/${query.id}`).then(response => response.json())
    return {
        props: {
            post: response
        }
    }
}
