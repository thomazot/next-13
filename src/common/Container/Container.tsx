import React from "react";
import classNames from 'classnames'

export type ContainerProps = {
    children?: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export const Container: React.FC<ContainerProps> = ({ children, className, ...otherAttributes }) => (
    <div className={classNames('container', 'mx-auto', 'px-4', className)} {...otherAttributes}>
        {children}
    </div>
)