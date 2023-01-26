import {LayoutProps} from 'models/common'
import React from 'react'

const SidebarAccordion: React.FC < LayoutProps > = (props) => {
    const {children} = props
    return (
        <>
            <div className="shop__sidebar__accordion">
                {children} </div>
        </>
    )
}
export default SidebarAccordion
