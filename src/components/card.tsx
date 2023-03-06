import {IPost} from "@pages/post/post.types";
import Image from "next/image";
import Link from "next/link"
export function Card({ post }: { post: IPost} ) {
    return(
        <>
                <section className="relative border-b bg-white border-gray-200 rounded shadow-lg min-w-[280px] cursor-pointer mb-3 hover:scale-105 hover:bg-blue-50-100 transition-all duration-200 ease-in-out">
                    <Link href={`/post/${post.id}`}>
                        <Image src={post.featured_media?.medium || '/mejorconsalud.jpg'}
                               alt={post.slug}
                               width={400} height={400}
                               className="inset-0 w-full h-60 object-cover rounded-t" />
                        <div className="pt-4 pr-4 pl-4">
                            <h4 className="text-lg font-bold text-gray-800 mb-1 text-left">{post.title}</h4>
                            <p className="text-gray-600 text-sm leading-snug text-left">
                                {post.headline || post.excerpt}
                            </p>
                            <div className="flex justify-between p-2 pl-0 flex-wrap mt-2 text-gray-500 bottom-1">
                                {post.categories.map(category => (
                                    <div className="category mr-6 py-1 px-2 rounded-b-md cursor-pointer border-gray-400" key={category.id}>
                                        <span className="text-blue-500">#</span>{category.name}
                                    </div>
                                ))}
                                <span className="text-gray-400">{new Date(post.published).toDateString()}</span>
                            </div>
                        </div>
                    </Link>
                </section>
        </>
    )
}
