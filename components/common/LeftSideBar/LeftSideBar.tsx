import { LayoutProps } from '@/models/common'
import React from 'react'


const LeftSideBar = ({ children }: LayoutProps) => {
    return (
        <>
            <div className="col-lg-3">
                {children}
            </div>
        </>
    )
}

export default LeftSideBar
