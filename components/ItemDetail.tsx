
import { ItemDetailDTO } from "@/commons/dtos/ItemDetailDTO";
import { ProductCondition, ProductConditionDescription } from "@/commons/consts.ts/consts";
import { formatCurrency } from "@/utilities/formatCurrency";
import { padWithLeadingZeros } from "@/utilities/padWithLeadingZeros";

type ItemDetailProps = {
    itemDetail?: ItemDetailDTO
}

export default function ItemDetail({ itemDetail }: ItemDetailProps) {

    return (
        <>
            {itemDetail &&
                <div className="flex flex-row justify-center mb-10">
                    <div className="mx-[100px]  w-full max-w-[1000px]">
                        <div className="py-2 text-[#B0B0B0]">
                            {itemDetail.item.categories.join(' > ')}
                        </div>
                        <div className="bg-white rounded-sm p-2">
                            <div className="flex flex-col p-5">
                                <div className="flex flex-row">
                                    <div className="w-[70%]">
                                        <img alt="Imagen producto" src={itemDetail.item.picture} className="w-full" />
                                    </div>
                                    <div className="flex flex-col w-[30%] pl-8">
                                        <div className="text-sm">{itemDetail.item.condition == ProductCondition.New ? ProductConditionDescription.New : ProductConditionDescription.Used}</div>
                                        <div className="text-lg font-bold">{itemDetail.item.title}</div>
                                        <div className="flex flex-row items-start">
                                            <div className="text-4xl">{formatCurrency(itemDetail.item.price.amount)}</div>
                                            <div className="text-lg">.{padWithLeadingZeros(Math.trunc(itemDetail.item.price.decimals * 2), 2)}</div>
                                        </div>
                                        <button className="mt-8 p-2 w-full bg-[#3485f3] flex flex-row items-center justify-center text-white rounded-md">Comprar</button>
                                    </div>
                                </div>
                                <div className="pt-24 mr-[10%]">
                                    <div className="text-2xl">Descripción del producto</div>
                                    <div className=" pt-6">
                                        {itemDetail.item.description.split('\n').map((descriptionLine, index) => {
                                            return (
                                                <p key={index}>{descriptionLine}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}