import { useSearch } from "@/contexts/SearchContext"
import SearchResultItem from "./SearchResultItem"
import { useRef } from "react"

export default function SearchResults() {
    const { searchResponse, searching } = useSearch()
    const lastItemId = useRef("")

    if (searchResponse && searchResponse.items && searchResponse.items.length > 0) {
        lastItemId.current = searchResponse.items[searchResponse.items.length - 1].id
    }

    if (searching) {
        return (
            <div className="flex flex-row justify-center">
                <div className="mx-[100px]  w-full max-w-[1000px]">
                    {
                        <div className="bg-white rounded-sm my-5 py-5 flex justify-center text-[#B0B0B0]">
                            <span>Cargando...</span>
                        </div>
                    }
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="flex flex-row justify-center">
                <div className="mx-[100px]  w-full max-w-[1000px]">
                    {
                        searchResponse && searchResponse.items && searchResponse.items.length > 0 ?
                            <>
                                <div className="py-2 text-[#B0B0B0]">
                                    {searchResponse.categories.join(' > ')}
                                </div>
                                <div className="bg-white rounded-sm p-2">
                                    {
                                        searchResponse.items.map(item => {
                                            return (
                                                <SearchResultItem key={item.id} item={item} addLineBelow={item.id != lastItemId.current} />
                                            )
                                        })
                                    }
                                </div>
                            </>
                            : <>
                                <div className="bg-white rounded-sm my-5 py-5 flex justify-center text-[#B0B0B0]">
                                    <span>No se han encontrado resultados</span>
                                </div>
                            </>
                    }
                </div>
            </div>
        </>
    )
}