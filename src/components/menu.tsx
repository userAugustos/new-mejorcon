import { Dispatch, SetStateAction } from "react";

export function HamburgerMenu({ menuIsOpen, setMenuIsOpen }: {menuIsOpen: boolean, setMenuIsOpen: Dispatch<SetStateAction<boolean>>}) {
    return (
        <button
            className="relative p-2 rounded-md text-gray-500 hover:text-white focus:outline-none focus:text-white transition duration-150 ease-in-out"
            aria-label="Menu"
            onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
      <span
          className={`${
              menuIsOpen ? "opacity-0" : "opacity-100"
          } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black`}
          style={{ width: "20px", height: "2px"}}
      ></span>
            <span
                className={`${
                    menuIsOpen ? "opacity-0" : "opacity-100"
                } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black`}
                style={{
                    width: "20px",
                    height: "2px",
                    marginTop: "4px",
                }}
            ></span>
            <span
                className={`${
                    menuIsOpen ? "opacity-0" : "opacity-100"
                } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black`}
                style={{
                    width: "20px",
                    height: "2px",
                    marginTop: "8px",
                }}
            ></span>
            <span
                className={`${
                    menuIsOpen ? "opacity-100" : "opacity-0"
                } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black`}
                style={{
                    width: "20px",
                    height: "2px",
                    transform: menuIsOpen ? "rotate(45deg)" : "none",
                }}
            ></span>
            <span
                className={`${
                    menuIsOpen ? "opacity-100" : "opacity-0"
                } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black`}
                style={{
                    width: "20px",
                    height: "2px",
                    transform: menuIsOpen ? "rotate(-45deg)" : "none",
                    marginTop: "4px",
                }}
            ></span>
        </button>
    );
}
