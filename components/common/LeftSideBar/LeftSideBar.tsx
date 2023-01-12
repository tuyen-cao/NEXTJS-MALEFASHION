import React from 'react'
import { layoutProps } from "../../../models/common"

const LeftSideBar = ({ children }: layoutProps) => {
    return (
        <>
            <div className="col-lg-3">
                {children}
            </div>
        </>
    )
}

export default LeftSideBar
