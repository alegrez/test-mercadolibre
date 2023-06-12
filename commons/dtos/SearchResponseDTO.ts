import { AuthorDTO } from "./AuthorDTO"
import { ItemDTO } from "./ItemDTO"

export type SearchResponseDTO = {
    author: AuthorDTO,
    categories: string[],
    items: ItemDTO[]
}
