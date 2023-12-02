import classNames from "classnames";
import React from "react";

type TitleProps = {
    children?: React.ReactNode
    size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7'
} & React.HTMLAttributes<HTMLTitleElement>

const DICTIONARY_SIZE = {
    'h1': 'text-7xl',
    'h2': 'text-6xl',
    'h3': 'text-5xl',
    'h4': 'text-4xl',
    'h5': 'text-3xl',
    'h6': 'text-2xl',
    'h7': 'text-1xl'
}

export const Title: React.FC<TitleProps> = ({ children, size='h1', className, ...otherAttributes }) => 
    React.createElement(size, {...otherAttributes, className: classNames('font-bold', DICTIONARY_SIZE[size], className) }, [children])
