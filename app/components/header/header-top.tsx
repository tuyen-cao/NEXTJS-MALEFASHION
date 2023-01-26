import Link from 'next/link'
import React from 'react'
import SignInLink from './sign-in-link'

const HeaderTop: React.FC = () => {
    return <>
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-7">
                        <div className="header-top__left">
                            <p>Free shipping, 30-day return or refund guarantee.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-5">
                        <div className="header-top__right">
                            <div className="header-top__links">
                                <SignInLink/>
                                <Link href="#">FAQs</Link>
                            </div>
                            <div className="header-top__hover">
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
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default HeaderTop
