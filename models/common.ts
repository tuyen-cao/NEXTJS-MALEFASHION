import { ReactNode } from 'react'
import { Control } from 'react-hook-form'


export interface LayoutProps {
    children: ReactNode
}

export interface LinkProps {
    href: string,
    text: string
}

export interface FieldProps {
    placeholder?: string,
    type: string,
    onChange?: ()=> void,
    onBlur?: ()=> void,
    value?: string,
    ref?: string,
}
export interface InputFieldProps extends FieldProps {
    name: string,
    label?: string,
    control?: Control<any>
}

export interface PagiantionProps {
    totalItems?: number,
    onPageChange?: (value: number) => void
}