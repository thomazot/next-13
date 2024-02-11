import { Card } from "@/common/Card";
import { Text } from "@/common/Text";
import { Title } from "@/common/Title";
import Image from "next/image";

export type CardPostProps = {
    id: string,
    image: string,
    title: string,
    description: string
}

export const CardPost = ({ id, image, title, description }: CardPostProps) => (
    <Card data-id={id}>
        <Image className="w-full h-52 object-contain" alt={title} src={image} width={200} height={200} />
        <Title className="py-3" size="h3">{title}</Title>
        <Text>{description}</Text>
    </Card>
)
