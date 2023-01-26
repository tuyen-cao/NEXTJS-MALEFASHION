'use client';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import footerStyle from "./footer.module.scss"
import styled  from 'styled-components'

const Footer:React.FC = () => {
    return (
        <footer className={footerStyle.footer}>
            <ContainerStyled className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className={footerStyle.footer__about}>
                            <div className={footerStyle.footer__logo}>
                                <Link href="#">
                                    <Image width={195} height={23} src="/img/footer-logo.png" alt="" />
                                </Link>
                            </div>
                            <p>
                                The customer is at the heart of our unique business model, which
                                includes design.
                            </p>
                            <Link href="#">
                                <Image width={218} height={23} src="/img/payment.png" alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                        <div className={footerStyle.footer__widget}>
                            <h6>Shopping</h6>
                            <ul>
                                <li>
                                    <Link href="#">Clothing Store</Link>
                                </li>
                                <li>
                                    <Link href="#">Trending Shoes</Link>
                                </li>
                                <li>
                                    <Link href="#">Accessories</Link>
                                </li>
                                <li>
                                    <Link href="#">Sale</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className={footerStyle.footer__widget}>
                            <h6>Shopping</h6>
                            <ul>
                                <li>
                                    <Link href="#">Contact Us</Link>
                                </li>
                                <li>
                                    <Link href="#">Payment Methods</Link>
                                </li>
                                <li>
                                    <Link href="#">Delivary</Link>
                                </li>
                                <li>
                                    <Link href="#">Return &amp; Exchanges</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
                        <div className={footerStyle.footer__widget}>
                            <h6>NewLetter</h6>
                            <div className={footerStyle.footer__newslatter}>
                                <p>
                                    Be the first to know about new arrivals, look books, sales &amp;
                                    promos!
                                </p>
                                <form action="#">
                                    <input type="text" placeholder="Your email" />
                                    <button type="submit">
                                        <span className="icon_mail_alt" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className={footerStyle.footer__copyright__text}>
                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            <p>
                                Copyright © 2020 All rights reserved | This template is made with{" "}
                                <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                                <Link href="https://colorlib.com" target="_blank">
                                    Colorlib
                                </Link>
                            </p>
                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        </div>
                    </div>
                </div>
            </ContainerStyled>
        </footer>
    )
}

export default Footer


const ContainerStyled = styled.div`
    border: 1px solid #f1f1f1;
`