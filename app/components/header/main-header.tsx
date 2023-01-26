import { LayoutProps } from '@/models/common'
import React from 'react'


const MainHeader: React.FC < LayoutProps > = (props) => {
    const {children} = props

    return <>
        <div className="container">
            <div className="row">
                {children} </div>
            <div className="canvas__open">
                <i className="fa fa-bars"/>
            </div>
        </div>
    </>
}

export default MainHeader
