import classNames from "classnames";
import React from "react";

type ButtonProps = {
    children?: React.ReactNode
    full?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({ children, full, ...otherAttributes }) => (
    <button 
        className={classNames(
            "flex justify-center items-center h-12 px-4 rounded-md text-primary-contrast",
            'bg-primary hover:bg-actions-hover focus:bg-actions-focus active:bg-actions-actived disabled:bg-actions-disabled',
            full && 'w-full'
        )}
        {...otherAttributes}
    >
        {children}
    </button>
)