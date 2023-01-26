import Link from 'next/link'
import React from 'react'
import HeaderNavOptions from './header-nav-options'
import SignInLink from './sign-in-link'

const HeaderNavOptionsWrapperMobile: React.FC = () => {
    return <>
        <div className="offcanvas-menu-overlay"></div>
        <div className="offcanvas-menu-wrapper">
            <div className="offcanvas__option">
                <div className="offcanvas__links">
                    <SignInLink/>
                    <Link href="#">FAQs</Link>
                </div>
                <div className="offcanvas__top__hover">
                    <span>
                        Usd
                        <i className="arrow_carrot-down"/>
                    </span>
                    <ul>
                        <li>USD</li>
                        <li>EUR</li>
                    </ul>
                </div>
            </div>
            <div className="offcanvas__nav__option">
                <HeaderNavOptions/>
            </div>
            <div id="mobile-menu-wrap"/>
            <div className="offcanvas__text">
                <p>Free shipping, 30-day return or refund guarantee.</p>
            </div>
        </div>
    </>
}

export default HeaderNavOptionsWrapperMobile
