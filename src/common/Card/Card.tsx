import classNames from "classnames"
import React from "react"
import { padding } from 'tailwindcss/defaultTheme'

type CardProps = {
    children?: React.ReactNode
    as?: React.ElementType
    spacing?: typeof padding
} & React.HTMLAttributes<HTMLDivElement>

export const Card: React.FC<CardProps> = ({ children, as='div', spacing='p-8', className, ...otherAttributes }) => (
    React.createElement(as, { ...otherAttributes, className: classNames(`flex flex-col shadow-md ${spacing} bg-white text-primary rounded-md`, className) }, [children])
)