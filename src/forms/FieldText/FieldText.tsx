import classNames from 'classnames'
import React, { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export type IconPositionType = 'right' | 'left'

interface FieldTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: FieldError
  disabled?: boolean
  icon?: React.ReactNode
  iconPosition?: IconPositionType
  loading?: boolean
}

export const FieldText = React.forwardRef<HTMLInputElement, FieldTextProps>(
  (
    { label, error, disabled, icon, iconPosition = 'right', loading, id='input-id', ...props },
    ref
  ) => (
    <div className={classNames('relative', disabled && 'opacity-20 pointer-events-none text-base' )}>
        <input
            id={id}
            className={classNames(
                'peer',
                'py-3 px-4 rounded-md focus:outline-none border-2 bg-transparent w-full h-12',
                'border-primary hover:border-actions-hover focus:border-actions-focus active:border-actions-actived disabled:border-actions-disabled',
                error && '!border-red-400',
                (icon || loading) && (iconPosition === 'right' ? 'pr-10' : 'pl-10'),
            )}
            ref={ref}
            {...props}
        />
        {label && (
            <label htmlFor={id} className={classNames(
                'peer-focus:text-actions-actived absolute -top-3 left-0 z-10 text-primary bg-white dark:bg-black leading-6 mx-2 px-1',
                error && 'text-red-400'
            )}>
                {label}
            </label>
        )}
        {error?.message && (
            <div className='text-red-400 text-sm px-2 absolute top-full'>{error?.message}</div>
        )}
        <i className={classNames(
            'absolute top-0 bottom-0 w-12 flex justify-center items-center',
            iconPosition === 'right' ? 'right-0' : 'left-0'
        )}>
            {icon && !loading && icon}
            {loading && <AiOutlineLoading3Quarters className='animate-spin fill-primary' />}
        </i>
    </div>
  )
)

FieldText.displayName = 'FieldText'