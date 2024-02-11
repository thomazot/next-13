import { Title } from "@/common/Title"
import { CardProduct, CardProductProps } from "../CardProduct"
import { View } from "@/common/View"

type ShowcaseProps = {
    title?: string
    items: CardProductProps[]
}

export const Showcase = ({ title, items }: ShowcaseProps) => {
    return (
        <View className="w-full" as="section">
            {title && <Title className="py-8" size="h2">{title}</Title>}
            <View className="snap-x overflow-x-auto gap-8" direction="row">
                {items.map((item) => <View className="snap-center"><CardProduct key={item.id} {...item} /></View>)}
            </View>
        </View>
    )
}