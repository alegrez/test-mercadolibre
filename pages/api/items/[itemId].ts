
import { ApiCategoriesResponseDTO } from "@/commons/dtos/ApiCategoriesResponseDTO";
import { ApiItemDescriptionResponseDTO } from "@/commons/dtos/ApiItemDescriptionResponseDTO copy";
import { ApiItemResponseDTO } from "@/commons/dtos/ApiItemResponseDTO";
import { mapApiItemResponse } from "@/utilities/dtoMapper";
import { NextApiRequest, NextApiResponse } from "next"

export default async function getItemDetail(req: NextApiRequest, res: NextApiResponse) {

    const itemId = req.query.itemId as string;
    if (!itemId || itemId == "") {
        res.status(400);
        res.json(null);
        return;
    }

    const itemQueryUrl = `${process.env.MERCADOLIBRE_URL}items/${itemId}`
    const itemResponse = await fetch(itemQueryUrl)
    const itemResultJson = await itemResponse.json()
    const apiItemResponse = itemResultJson as ApiItemResponseDTO

    const itemDescriptionQueryUrl = `${process.env.MERCADOLIBRE_URL}items/${itemId}/description`
    const itemDescriptionResponse = await fetch(itemDescriptionQueryUrl)
    const itemDescriptionResultJson = await itemDescriptionResponse.json()
    const apiItemDescriptionResponse = itemDescriptionResultJson as ApiItemDescriptionResponseDTO

    const itemDetail = mapApiItemResponse(apiItemResponse, apiItemDescriptionResponse)

    if (itemDetail == null) {
        res.json(itemDetail)
        return
    }
    const categoriesQueryUrl = `${process.env.MERCADOLIBRE_URL}categories/${itemDetail?.item.categoryId}`
    const categoriesResponse = await fetch(categoriesQueryUrl)
    const categoriesResultJson = await categoriesResponse.json()
    const apiCategoriesResponse = categoriesResultJson as ApiCategoriesResponseDTO

    itemDetail.item.categories = apiCategoriesResponse.path_from_root.map(category => category.name)

    res.json(itemDetail)
}