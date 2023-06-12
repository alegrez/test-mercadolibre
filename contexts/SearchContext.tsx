import { SearchResponseDTO } from "@/commons/dtos/SearchResponseDTO";
import { ReactNode, createContext, useContext, useState } from "react";

type SearchProps = {
    children: ReactNode
}

type SearchContext = {
    searchResponse: SearchResponseDTO,
    setSearchResponse: (newSearchResponse: SearchResponseDTO) => void,
    searching: boolean,
    setSearching: (newSearching: boolean) => void
}

const SearchContext = createContext({} as SearchContext);

export function useSearch() {
    return useContext(SearchContext);
}

export function SearchProvider({ children }: SearchProps) {
    const [searchResponse, setSearchResponse] = useState<SearchResponseDTO>({} as SearchResponseDTO)
    const [searching, setSearching] = useState<boolean>(false)

    return (
        <SearchContext.Provider value={{
            searchResponse: searchResponse,
            setSearchResponse: setSearchResponse,
            searching: searching,
            setSearching: setSearching,
        }}>
            {children}
        </SearchContext.Provider>
    )
}