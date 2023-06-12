export type ApiSearchResponseDTO = {
    results: ApiSearchResultDTO[],
    available_filters: ApiSearchFilterDTO[]
}

export type ApiSearchResultDTO = {
    id: string,
    title: string,
    price: number,
    currency_id: string,
    thumbnail: string,
    condition: string,
    shipping: {
        free_shipping: boolean
    },
    address: {
        state_name: string
    },
    category_id: string
}

type ApiSearchFilterDTO = {
    id: string,
    name: string,
    values: ApiSearchFilterValueDTO[]
}

type ApiSearchFilterValueDTO = {
    id: string,
    name: string,
    results: number
}