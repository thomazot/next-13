import { Card } from "@/common/Card";
import { Text } from "@/common/Text";
import { Title } from "@/common/Title";
import Image from "next/image";

export type CardProductProps = {
    id: string,
    image: string,
    name: string,
    price: string
}

export const CardProduct = ({ id, image, name, price }: CardProductProps) => (
    <Card data-id={id}>
        <Image className="w-full h-52 object-contain" alt={name} src={image} width={200} height={200} />
        <Title className="py-3" size="h3">{name}</Title>
        <Text>{price}</Text>
    </Card>
)
