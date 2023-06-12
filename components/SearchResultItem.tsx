import { ItemDTO } from "@/commons/dtos/ItemDTO";
import { formatCurrency } from "@/utilities/formatCurrency";
import Image from 'next/image';
import Link from "next/link";

type SearchResultItemProps = {
    item: ItemDTO,
    addLineBelow: boolean
}

export default function SearchResultItem({ item, addLineBelow }: SearchResultItemProps) {
    return (
        <>
            <Link href={`/items/${item.id}`}>
                <div className="flex flex-row m-4">
                    <div className="relative h-[180px] w-[180px]">
                        <Image src={item.picture} alt="Imagen" fill style={{ objectFit: "contain" }} />
                    </div>
                    <div className="flex flex-col w-[70%] gap-2 py-2">
                        <div className="text-lg">
                            {formatCurrency(item.price.amount)} {item.free_shipping && <Image className="inline" src={'/images/free-shipping-icon.png'} alt="Free Shipping" width={20} height={20}></Image>}
                        </div>
                        <div className="max-w-[70%]">
                            <p>{item.title}</p>
                        </div>
                    </div>
                    <div className="pt-5 w-[20%] text-[#B0B0B0]">
                        {item.address}
                    </div>
                </div>
            </Link>
            {
                addLineBelow &&
                <hr />
            }
        </>
    )
}