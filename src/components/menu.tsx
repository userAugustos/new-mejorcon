import {useMenuContext} from "@hooks/useMenu";

export function Menu() {
    return (
        <section className="">
            <label htmlFor="search">Busca Artigos, Noticias, Doenças...</label>
            <input type="search" name="search" id="search"/>
        </section>
    )
}
