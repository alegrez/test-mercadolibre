export type ApiItemResponseDTO = {
    id: string,
    title: string,
    currency_id: string,
    price: number,
    pictures: { url: string }[],
    condition: string,
    shipping: {
        free_shipping: boolean
    },
    sold_quantity: number,
    category_id: string
}