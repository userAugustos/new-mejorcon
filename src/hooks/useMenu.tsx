import {createContext, useState} from "react";
import {Dispatch, SetStateAction, useContext} from "react";

interface IMenuContext {
    menuIsOpen: boolean,
    sweepMenu: () => void,
    closeMenu: () => void
}

export const MenuContext = createContext<IMenuContext>({
    menuIsOpen: false,
    sweepMenu: () => {},
    closeMenu: () => {},
})

export function MenuContextProvider({ children }: { children: any}) {
    const [ menuIsOpen, setMenuIsOpen ] = useState(false);

    const sweepMenu = () => {
        setMenuIsOpen(!menuIsOpen)
    }
    const closeMenu = () => {
        setMenuIsOpen(false)
    }
    // crazy stuff defining directly the action of the setState, i missed playing with react...
    return <MenuContext.Provider value={{menuIsOpen, sweepMenu, closeMenu}}> { children } </MenuContext.Provider>
}

export const useMenuContext = () => useContext(MenuContext)
