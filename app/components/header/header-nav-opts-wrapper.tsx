import React from 'react'
import HeaderNavOptions from './header-nav-options'
const HeaderNavOptionsWrapper: React.FC = () => {
    return <>
        <div className="col-lg-3 col-md-3">
            <div className="header__nav__option">
                <HeaderNavOptions/>
            </div>
        </div>
    </>
}
export default HeaderNavOptionsWrapper
