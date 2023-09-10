import classNames from "classnames"
import React from "react"


type ViewProps = {
    children?: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export const View: React.FC<ViewProps> = ({ children, className, ...otherAttributes }) => (
    <div className={classNames('flex', className)} {...otherAttributes}>
        {children}
    </div>
)