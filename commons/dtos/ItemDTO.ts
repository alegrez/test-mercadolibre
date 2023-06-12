import { PriceDTO } from "./PriceDTO"

export type ItemDTO = {
    id: string,
    title: string,
    price: PriceDTO,
    picture: string,
    condition: string,
    free_shipping: boolean,
    sold_quantity: number,
    description: string
    address: string,
    categoryId: string,
    categories: string[]
}