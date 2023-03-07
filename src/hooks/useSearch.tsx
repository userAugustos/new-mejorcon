import { createContext, Dispatch, ReactComponentElement, ReactElement, SetStateAction, useContext, useState } from "react";

import { debounce } from "lodash"

interface SearchContextType {
	searchTerm: string;
	setSearchValue: (value: string) => void;
  byRelevance: boolean;
  changeRelevance: () => void;
  currentPage: number;
  nextPage: () => void;
}

export const SearchContext = createContext<SearchContextType>({
	searchTerm: "",
	setSearchValue: () => {},
  byRelevance: false,
  changeRelevance: () => {},
  currentPage: 1,
  nextPage: () => {}
});


export function SearchContextProvider({ children }: { children: ReactElement | Iterable<ReactElement> }) {
	const [searchTerm, setSearchTerm] = useState('');
	const [byRelevance, setByRelevance] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);

	const changeRelevance = () => {
		setCurrentPage(1);
		setByRelevance(!byRelevance);
	}
	
	const nextPage = () => {
		setCurrentPage(currentPage + 1);
	}

	const setSearchValue = debounce((value: string) => {
			console.debug(value)
			setSearchTerm(value)
	}, 1000)

	return <SearchContext.Provider value={{searchTerm, setSearchValue, byRelevance, changeRelevance, currentPage, nextPage}} >{ children } </SearchContext.Provider>
}

export const useSearchContext = () => useContext(SearchContext);