import { LayoutProps } from 'models/common'
import React from 'react'

const RightSideBar = ({ children }: LayoutProps) => {
    return (
        <>
            <div className="col-lg-4">
                <div className="shop__sidebar">
                    {children}
                </div>
            </div>
        </>
    )
}

export default RightSideBar
