import { ReactNode} from 'react'


export type LayoutProps = {
    children: ReactNode 
}

export type LinkProps = {
    href: string,
    text: string
}

export interface PagiantionProps {
    totalItems?: number,
    onPageChange?: (value: number) => void
}