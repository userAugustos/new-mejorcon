import {FormEvent, SetStateAction, useEffect, useState} from "react";
import {Search} from "../utils/search";
import {Loading} from "@components/loading";
import {NoFound} from "@components/noFound";
import {Card} from "@components/card";

export function Menu() {
    const [searchTerm, setSearchTerm] = useState('');
    const {loading = false, posts} = Search(searchTerm);

    const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
        console.debug(event.currentTarget.value)
        setSearchTerm(event.currentTarget.value);
    };

    return (
        <section className="p-3 mt-2 transition-all duration-500 ease-in-out max-w-[1400px] m-auto flex flex-col justify-center items-center">
            <div className="w-full max-w-[1000px] relative">
                <input
                    type="text"
                    name="search"
                    id="search"
                    value={searchTerm} onChange={handleInputChange}
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                />
                <label htmlFor="search" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                    Busca Artigos, Noticias, Doenças...
                </label>
            </div>

            <div className="p-2 mt-6">
                {loading && <Loading />}
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
                     </ul>
                )}
            </div>
        </section>
    )
}


