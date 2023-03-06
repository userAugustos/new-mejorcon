import { categories } from '@pages/home.types'
import {useEffect, useMemo, useState} from "react";
export function Categories() {
    const [categories, setCategories] = useState<categories[]>([])

    const memoizedCategories = useMemo(() => categories, [categories]);

    useEffect( () => {
        const fetchData = async () => {
            const result = await fetch(
                `https://beta.mejorconsalud.com/wp-json/mc/v2/categories`
            ).then((response) => response.json())

            setCategories(result.data);
        };

        fetchData()
    }, [])
    return(
        <div className="col-span-1 bg-white shadow-lg p-2 lg:block hidden max-h-screen overflow-y-scroll">
            <h4 className="text-2xl text-center tracking-wider">
                Categorias
            </h4>
            <ul className="h-full">
                {
                    memoizedCategories.map(categorie => (
                        <li className="px-4 py-2 my-2 border-b border-gray-100 hover:text-green-400 hover:cursor-pointer" key={categorie.id}>
                            <h5 className="text-1xl mb-2">{categorie.name}</h5>
                            <p className="text-xs opacity-75 my-2">{categorie.description}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
