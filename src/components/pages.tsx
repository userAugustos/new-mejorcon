import {pages } from "@pages/home.types";
import {useEffect, useMemo, useState} from "react";

export function Pages(){
    const [pages, setPages] = useState<pages[]>([])

    const memoizedPages = useMemo(() => pages, [pages]);

    useEffect( () => {
        const fetchData = async () => {
            const result = await fetch(
                `https://beta.mejorconsalud.com/wp-json/mc/v2/pages`
            ).then((response) => response.json())

            setPages(result.data);
        };

        fetchData()
    }, [])

    return (
        <div className="col-span-1 bg-white shadow-lg p-2 lg:block hidden max-h-screen">
            <h4 className="text-2xl text-center tracking-wider">
                Páginas
            </h4>
            <ul className="h-full">
            {
                memoizedPages.map((page: any) => (
                    <li className="px-4 py-2 my-2 border-b border-gray-100 hover:text-purple-500 hover:cursor-pointer" key={page.id}>
                        <h5 className="text-1xl mb-2">{page.title}</h5>
                        <p className="text-xs text-gray-500 opacity-75 my-2">{page.author.name}</p>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}
