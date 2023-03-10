import {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "./menu"
import { useMenuContext } from "@hooks/useMenu";
export function Header() {
    const { menuIsOpen, sweepMenu } = useMenuContext()
    return (
        <header className="p-1 px-8 h-16 min-h-fit flex items-center justify-between space-x-2.5 mx-auto bg-white shadow-md shadow-color-red dark:bg-gray-800 sticky top-0 lg:justify-around">
            <button className="relative group" onClick={() => sweepMenu()}>
                <div className="relative flex overflow-hidden items-center justify-center w-[50px] h-[50px] transform transition-all">
                    <div className="flex flex-col justify-between w-[35px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                        {menuIsOpen ? (
                                <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 group-focus-within:translate-x-0 flex w-0 group-focus-within:w-12">
                                    <div className="absolute bg-black h-[2px] w-7 transform transition-all rotate-up"></div>
                                    <div className="absolute bg-black h-[2px] w-7 transform transition-all rotate-down"></div>
                                </div>
                            )
                            :(<>
                                <div className={`bg-black h-[3px] w-8 transform transition-all duration-300 origin-left ${menuIsOpen && 'translate-x-10'}`}></div>
                                <div className={`bg-black h-[3px] w-8 rounded transform transition-all duration-300 ${menuIsOpen && 'translate-x-10'} delay-75`}></div>
                                <div className={`bg-black h-[3px] w-8 transform transition-all duration-300 origin-left ${menuIsOpen && 'translate-x-10'} delay-150`}></div>
                            </>)
                        }
                    </div>
                </div>
            </button>
            <Link href='/' rel="nofollow">
                <div className="hover:cursor-pointer flex justify-center items-center">
                    <img
                        src="https://cdn.atomik.vip/themes/mcs/es/logo.svg?auto=webp&quality=45&width=1920&crop=16:9,smart,safe"
                        alt="Mejor Salud"
                    />
                </div>
            </Link>
            <section className="flex items-center justify-between p-1 w-20">
                <button onClick={() => console.debug('theme')}>
                    <img src="/theme.svg" alt="change theme icon"/>
                </button>
                <button onClick={() => sweepMenu()}>
                    <img src="/magnifying.svg" alt="search icon"/>
                </button>
            </section>
        </header>
    )
}
