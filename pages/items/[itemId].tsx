import { ItemDetailDTO } from "@/commons/dtos/ItemDetailDTO";
import ItemDetail from "@/components/ItemDetail";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Item() {
    const router = useRouter();
    const [itemId, setItemId] = useState<string>("")
    const [itemDetail, setItemDetail] = useState<ItemDetailDTO | null>()

    useEffect(() => {
        if (!router.isReady) return;

        setItemId(router.query.itemId?.toString() ?? "")

    }, [router.isReady, router.query.itemId]);

    useEffect(() => {
        try {
            if (itemId != "") {
                fetch(`/api/items/${itemId}`)
                    .then((response) => response.json())
                    .then((itemDetail: ItemDetailDTO) => {
                        console.log(itemDetail)
                        setItemDetail(itemDetail)
                    })
            }
        } catch (error) {
            console.log(error)
        }
    }, [itemId])

    if (itemDetail === null) {
        router.push('/items', undefined, { shallow: true })
    }

    return (
        <ItemDetail itemDetail={itemDetail as ItemDetailDTO} />
    )
}