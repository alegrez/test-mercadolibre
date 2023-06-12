
import { ApiCategoriesResponseDTO } from "@/commons/dtos/ApiCategoriesResponseDTO"
import { ApiSearchResponseDTO } from "@/commons/dtos/ApiSearchResponseDTO"
import { SearchFilterDTO } from "@/commons/dtos/SearchFilterDTO"
import { mapApiSearchResponse } from "@/utilities/dtoMapper"
import { NextApiRequest, NextApiResponse } from "next"

export default async function queryItems(req: NextApiRequest, res: NextApiResponse) {

    const searchQuery = JSON.parse(req.body) as SearchFilterDTO
    if (searchQuery == null) {
        res.status(400)
        res.json({ message: "no search query specified" })
        return
    }

    const queryUrl = `${process.env.MERCADOLIBRE_URL}sites/MLA/search?q=${searchQuery.q}`
    const response = await fetch(queryUrl)
    const resultJson = await response.json()
    const apiSearchResponse = resultJson as ApiSearchResponseDTO
    const searchResponse = mapApiSearchResponse(apiSearchResponse)

    if (searchResponse?.items == null || searchResponse.items.length == 0) {
        res.json(searchResponse)
        return
    }

    const categoriesQueryUrl = `${process.env.MERCADOLIBRE_URL}categories/${searchResponse.items[0].categoryId}`
    const categoriesResponse = await fetch(categoriesQueryUrl)
    const categoriesResultJson = await categoriesResponse.json()
    const apiCategoriesResponse = categoriesResultJson as ApiCategoriesResponseDTO

    searchResponse.categories = apiCategoriesResponse.path_from_root.map(category => category.name)

    res.json(searchResponse)
}