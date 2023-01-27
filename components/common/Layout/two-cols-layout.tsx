import { LayoutProps } from '@/models/common'
import React from 'react'

export const TwoColsLayout = ({ children }: LayoutProps) => {
    return (
        <>
            <section className="spad">
                <div className="container">
                    <div className="row">
                        {children}
                    </div>
                </div>
            </section>
        </>
    )
}

