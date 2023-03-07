import {ChangeEvent, FormEvent, useState} from "react";
import {Search} from "../utils/search";
import {Loading} from "@components/loading";
import {NoFound} from "@components/noFound";
import {Card} from "@components/card";
import SearchArea from "./searchArea";
import { useSearchContext } from "@hooks/useSearch";

export function Menu() {

	const { searchTerm, byRelevance, currentPage } = useSearchContext()

	const {loading = false, posts} = Search(searchTerm, byRelevance, currentPage);

    return (
        <section className="p-3 mt-2 transition-all duration-500 ease-in-out max-w-[1400px] m-auto flex flex-col justify-center items-center bg-white z-10">
            <SearchArea hasNextPage={posts.pages > 1} />

            <div className="p-2 mt-6 relative">
                {loading &&  <Loading />}
                {!loading && posts?.size === 0 && <NoFound />}
                {posts.size > 0 && (
                    <ul className="min-w-[300px] w-full max-w-[1200px] max-h-[110vh] relative overflow-hidden flex flex-row justify-center flex-wrap">
                        {
                            posts.data.map(post => (
                                <li key={post.id} className="w-80 m-2">
                                    <Card post={post} />
                                </li>
                            ))
                        }

                        <span className="absolute left-2 bottom-0 text-gray-400 p-2">
                            {posts.size} Itens
                        </span>
                     </ul>
                )}
            </div>
        </section>
    )
}


