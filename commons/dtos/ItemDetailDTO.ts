import { AuthorDTO } from "./AuthorDTO"
import { ItemDTO } from "./ItemDTO"

export type ItemDetailDTO = {
    author: AuthorDTO,
    item: ItemDTO
}