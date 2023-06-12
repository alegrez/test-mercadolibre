import { ApiItemDescriptionResponseDTO } from "@/commons/dtos/ApiItemDescriptionResponseDTO copy";
import { ApiItemResponseDTO } from "@/commons/dtos/ApiItemResponseDTO";
import { ApiSearchResponseDTO, ApiSearchResultDTO } from "@/commons/dtos/ApiSearchResponseDTO";
import { ItemDTO } from "@/commons/dtos/ItemDTO";
import { ItemDetailDTO } from "@/commons/dtos/ItemDetailDTO";
import { SearchResponseDTO } from "@/commons/dtos/SearchResponseDTO";

export function mapApiSearchResponse(searchResponse: ApiSearchResponseDTO) {
    return {
        author: {
            name: process.env.AUTHOR_NAME,
            lastname: process.env.AUTHOR_LAST_NAME
        },
        items: searchResponse.results.map(mapItem).slice(0, 4)
    } as SearchResponseDTO
}

function mapItem(searchResult: ApiSearchResultDTO) {
    return {
        id: searchResult.id,
        title: searchResult.title,
        price: {
            currency: searchResult.currency_id,
            amount: Math.trunc(searchResult.price),
            decimals: searchResult.price - Math.trunc(searchResult.price)
        },
        picture: searchResult.thumbnail,
        condition: searchResult.condition,
        free_shipping: searchResult.shipping.free_shipping,
        address: searchResult.address?.state_name,
        categoryId: searchResult.category_id
    } as ItemDTO
}

export function mapApiItemResponse(itemResponse: ApiItemResponseDTO, itemDescriptionResponse: ApiItemDescriptionResponseDTO) {
    try {
        return {
            author: {
                name: process.env.AUTHOR_NAME,
                lastname: process.env.AUTHOR_LAST_NAME
            },
            item: {
                id: itemResponse.id,
                title: itemResponse.title,
                price: {
                    currency: itemResponse.currency_id,
                    amount: Math.trunc(itemResponse.price),
                    decimals: itemResponse.price - Math.trunc(itemResponse.price)
                },
                picture: itemResponse?.pictures[0]?.url ?? "",
                condition: itemResponse.condition,
                free_shipping: itemResponse.shipping.free_shipping,
                sold_quantity: itemResponse.sold_quantity,
                description: itemDescriptionResponse.plain_text,
                categoryId: itemResponse.category_id
            }
        } as ItemDetailDTO
    } catch (error) {
        return null
    }
}