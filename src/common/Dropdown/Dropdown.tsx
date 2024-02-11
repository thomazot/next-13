import React from "react"
import { View } from "../View"
import { Card } from "../Card"

type DropdownProps = {
    header: React.ReactNode
    children: React.ReactNode
}

export const Dropdown = ({ header, children }: DropdownProps) => (
    <View className="relative" as="section">
        <View>{header}</View>
        <Card spacing="p-2" className="absolute top-full left-1/2 -translate-x-1/2">{children}</Card>
    </View>
)