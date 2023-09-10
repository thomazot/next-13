import { SizeEnum } from "@/types";
import classNames from "classnames";
import React, { ElementType } from "react";

type TextProps = {
    children?: React.ReactNode
    size?: SizeEnum
    as?: ElementType
} & React.HTMLAttributes<HTMLElement>

const DICTIONARY_SIZE = {
    'XXL': 'text-2xl',
    'XL': 'text-xl',
    'LG': 'text-lg',
    'MD': 'text-base',
    'SM': 'text-sm',
    'XS': 'text-xs',
    'XXS': 'text-xs'
}

export const Text: React.FC<TextProps> = ({ children, as='p', size=SizeEnum.MD, className, ...otherAttributes }) => 
    React.createElement(as, {...otherAttributes, className: classNames(DICTIONARY_SIZE[size], className) }, [children])
