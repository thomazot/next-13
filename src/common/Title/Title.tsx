import { SizeEnum } from "@/types";
import classNames from "classnames";
import React, { ComponentType } from "react";

type TitleProps = {
    children?: React.ReactNode
    size?: SizeEnum
} & React.HTMLAttributes<HTMLTitleElement>

const DICTIONARY = {
    'XXL': 'h1',
    'XL': 'h2',
    'LG': 'h3',
    'MD': 'h4',
    'SM': 'h5',
    'XS': 'h6',
    'XXS': 'h7'
}

const DICTIONARY_SIZE = {
    'XXL': 'text-3xl',
    'XL': 'text-2xl',
    'LG': 'text-xl',
    'MD': 'text-lg',
    'SM': 'text-base',
    'XS': 'text-sm',
    'XXS': 'text-xs'
}

export const Title: React.FC<TitleProps> = ({ children, size=SizeEnum.XXL, ...otherAttributes }) => 
    React.createElement(DICTIONARY[size], {...otherAttributes, className: classNames('font-bold', DICTIONARY_SIZE[size]) }, [children])
