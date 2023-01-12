import React from 'react'
import { layoutProps } from "../../../models/common"

const RightSideBar = ({ children }: layoutProps) => {
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
