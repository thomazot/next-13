import classNames from "classnames"
import React from "react"

type ViewProps = {
    children?: React.ReactNode
    as?: React.ElementType
    direction?: 'col' | 'row' | 'col-reverse' | 'row-reverse'
    display?: 'flex' | 'grid' | 'block'
} & React.HTMLAttributes<HTMLDivElement>

export const View: React.FC<ViewProps> = ({ children, as='div', direction='col', className, display='flex', ...otherAttributes }) => {
    const flex = `flex flex-${direction}`
    const grid = 'grid'
    
    return (
        React.createElement(as, { ...otherAttributes, className: classNames({ [flex]: display === 'flex', [grid]: display === 'grid' }, className) }, [children])
    )
}