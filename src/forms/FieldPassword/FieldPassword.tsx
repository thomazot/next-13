import classNames from 'classnames'
import React, { InputHTMLAttributes, useState } from 'react'
import { FieldError } from 'react-hook-form'
import { AiFillEye } from 'react-icons/ai'
import { FieldText } from '../FieldText'

export type IconPositionType = 'right' | 'left'

interface FieldTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: FieldError
  disabled?: boolean
  loading?: boolean
}

export const FieldPassword = React.forwardRef<HTMLInputElement, FieldTextProps>(
  (
    props,
    ref
  ) => {
    const [visible, setVisible] = useState(false)

    return (
        <FieldText 
            icon={(
                <button onClick={() => setVisible((prevVisible) => !prevVisible)} type="button">
                    <AiFillEye className={classNames(visible ? 'fill-indigo-400' : 'fill-gray-400')} />
                </button>
            )} 
            type={visible ? 'text' : 'password'}
            ref={ref} 
            {...props} 
        />
    )
  }
)

FieldPassword.displayName = 'FieldPassword'