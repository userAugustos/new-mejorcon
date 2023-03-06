import {FormEvent, SetStateAction, useEffect, useState} from "react";
import {Search} from "../utils/search";
import {Loading} from "@components/loading";
import {NoFound} from "@components/noFound";
import {Card} from "@components/card";

export function Menu() {
    const [searchTerm, setSearchTerm] = useState('');
    const [byRelevance, setByRelevance] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const {loading = false, posts} = Search(searchTerm, byRelevance, currentPage);

    const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
        setCurrentPage(1);
        setSearchTerm(event.currentTarget.value);
    };

    const handleNextPage = () => {
        if(posts.pages <= 1){
            window.alert("Não há mais páginas") // a little trick
            return;
        }
        setCurrentPage(currentPage + 1)
    }

    const handleRelevanceChange = (e: FormEvent<HTMLSelectElement>) => {
        setCurrentPage(1);
        setByRelevance(!byRelevance);
        console.debug(byRelevance)
        console.debug(e)
    }

    return (
        <section className="p-3 mt-2 transition-all duration-500 ease-in-out max-w-[1400px] m-auto flex flex-col justify-center items-center bg-white">
            <div className="w-full max-w-[1000px] relative flex flex-row justify-between flex-wrap sm:flex-nowrap">
                <input
                    type="text"
                    name="search"
                    id="search"
                    value={searchTerm} onChange={handleInputChange}
                    className="block px-2.5 pb-2.5 pt-4 w-[80%] text-sm text-gray-900 bg-white rounded-lg border-1 border-solid border-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                />
                <label htmlFor="search" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                    Busca Artigos, Noticias, Doenças...
                </label>
                {posts.size > 0 && (
                    <div className="relative flex flex-row justify-between items-end mt-2 lg:mt-0">
                        <button
                            onClick={handleNextPage}
                            className="border border-teal-500 bg-teal-600 text-white block rounded-sm font-bold py-2 px-3 md:py-4 px-6 ml-2 flex items-center my-auto">
                            Próxima
                            <svg className="h-5 w-5 ml-2 fill-current" id="Layer_1"
                                 x="0px" y="0px"
                                 viewBox="-49 141 512 512"
                                 xmlSpace="preserve">
                                <path id="XMLID_11_" d="M-24,422h401.645l-72.822,72.822c-9.763,9.763-9.763,25.592,0,35.355c9.763,9.764,25.593,9.762,35.355,0
                                            l115.5-115.5C460.366,409.989,463,403.63,463,397s-2.634-12.989-7.322-17.678l-115.5-115.5c-9.763-9.762-25.593-9.763-35.355,0
                                            c-9.763,9.763-9.763,25.592,0,35.355l72.822,72.822H-24c-13.808,0-25,11.193-25,25S-37.808,422-24,422z"/>
                            </svg>
                        </button>

                        <select
                            id="order_by"
                            onChange={handleRelevanceChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 h-10 ml-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                        <option defaultChecked>Ordenar Por</option>
                        <option value="byRelevance" >relevância</option>
                        </select>
                    </div>
                )}
            </div>

            <div className="p-2 mt-6 relative">
                {loading && <Loading />}
                {(!loading && posts?.size === 0) || currentPage === 0 && <NoFound />}
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


