import { SearchResponseDTO } from "@/commons/dtos/SearchResponseDTO";
import { useSearch } from "@/contexts/SearchContext";
import Link from "next/link";
import Image from 'next/image';
import { useState } from "react"
import { useRouter } from "next/router";

export default function NavBar() {
    const { setSearchResponse, setSearching } = useSearch()
    const router = useRouter();

    const [query, setQuery] = useState("")

    async function searchResults() {
        console.log("holi")
        setSearching(true)
        try {
            router.push('/items', undefined, { shallow: true })
            const response = await fetch(`/api/items`, {
                method: 'POST',
                body: JSON.stringify({ q: query })
            })
            const searchResponse: SearchResponseDTO = await response.json();

            setSearchResponse(searchResponse)
        } catch (error) {
            setSearchResponse({} as SearchResponseDTO)
        }
        setSearching(false)
    }

    return (
        <>
            <div className="bg-[#fee600] h-12 w-full flex flex-row items-center justify-center">
                <div className="flex flex-row items-center justify-center gap-7 max-w-[1000px] w-full mx-[100px]">
                    <Link href={`/`}>
                        <button className="h-8 flex flex-row items-center justify-center rounded-sm" onClick={() => searchResults()}>
                            <Image className="inline" src={'/images/mercadolibre-logo.png'} alt="Free Shipping" width={50} height={50}></Image>
                        </button>
                    </Link>
                    <div className="flex flex-row items-center justify-center w-full">
                        <div className="h-8 flex-grow min-w-[250px]" >
                            <input
                                type="text"
                                placeholder="Nunca dejes de buscar"
                                className="h-full w-full px-3"
                                onChange={e => setQuery(e.target.value)}
                                value={query}
                                onKeyDown={e => { if (e.key === 'Enter') { searchResults() } }}
                            />
                        </div>

                        <button className="h-8 px-2 bg-[#eeeeee] flex flex-row items-center justify-center rounded-sm" onClick={() => searchResults()}>
                            <Image className="inline" src={'/images/search-icon.png'} alt="Free Shipping" width={15} height={15}></Image>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}