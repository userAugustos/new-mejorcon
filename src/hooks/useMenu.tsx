import {createContext, useState} from "react";
import {Dispatch, SetStateAction, useContext} from "react";

interface IMenuContext {
    menuIsOpen: boolean,
    sweepMenu: () => void
}

export const MenuContext = createContext<IMenuContext>({
    menuIsOpen: false,
    sweepMenu: () => {}
})

export function MenuContextProvider({ children }: { children: any}) {
    const [ menuIsOpen, setMenuIsOpen ] = useState(false);

    const sweepMenu = () => {
        setMenuIsOpen(!menuIsOpen)
    }
    // crazy stuff defining directly the action of the setState, i missed playing with react...
    return <MenuContext.Provider value={{menuIsOpen, sweepMenu}}> { children } </MenuContext.Provider>
}

export const useMenuContext = () => useContext(MenuContext)
