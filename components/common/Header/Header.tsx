import React, { ReactEventHandler, useEffect } from "react"

/* import ShoppingCartLink from "./utilities/ShoppingCartLink"
import { useTypedSelector } from "store";
import { addToCart, selectedProducts } from "reducers/productsReducer";
import { useDispatch } from "react-redux";
import { BasketItem } from "models/types"; */
import Link from "next/link";
import Image from "next/image";
import { LayoutProps, LinkProps } from "../../../models/common"
import { useRouter } from "next/router";
import { clsx } from 'clsx';

const Header: React.FC = () => {
    // const dispatch = useDispatch()
    // const productInCart = useTypedSelector(selectedProducts);
    const menuItems = [
        {
            text: "Home",
            href: "/home"
        },
        {
            text: "Shop",
            href: "/shop"
        },
        {
            text: "Pages",
            href: "/pages"
        },
        {
            text: "Blogs",
            href: "/blogs"
        }, {
            text: "Contact",
            href: "/contact"
        },
    ]
    useEffect(() => { /* const localStorageProductsInCart = localStorage.getItem("productsInCart");
        const storedProductsInCart = typeof localStorageProductsInCart === "string"
            ? JSON.parse(localStorageProductsInCart) : [];
        if (productInCart.length === 0 && storedProductsInCart.length > 0) {
            storedProductsInCart.map((product: BasketItem) => {
                dispatch(addToCart(product))
            })
        } */
    }, [])
    return (
        <>
            <HeaderNavOptionsWrapperMobile />
            <header className="header">
                <HeaderTop />
                <MainHeader>
                    <>
                        <HeaderLogo />
                        <MainMenu ItemList={menuItems}
                            key="header__menu" />
                        <HeaderNavOptionsWrapper />
                    </>
                </MainHeader>
            </header>
        </>
    )
}

export default Header


const MainMenu: React.FC<{
    ItemList: LinkProps[]
}> = (props) => {
    const router = useRouter()
    const { ItemList } = props
    return <> {
        ItemList.length && <div className="col-lg-6 col-md-6" key={`header-menu-wrapper`}>
            <nav className="header__menu mobile-menu" key={`header-menu`}>
                <ul key={`menulist`}> {
                    ItemList.map((item, i) => {
                        const path = item.href === '/' ? '/home' : item.href
                        return <>
                            <li className={clsx({ active: router.pathname === path })}
                                key={`menuitem-${i}`}>
                                <Link key={`menuitem-link-${i}`} href={
                                    item.href
                                }>{item.text}</Link>
                            </li>
                        </>
                    })
                } </ul>
            </nav>
        </div>



    } </>
}

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
                                <SignInLink />
                                <Link href="#">FAQs</Link>
                            </div>
                            <div className="header-top__hover">
                                <span>
                                    Usd
                                    <i className="arrow_carrot-down" />
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

const MainHeader: React.FC<LayoutProps> = ({ children }) => {

    return <>
        <div className="container">
            <div className="row">
                {children} </div>
            <div className="canvas__open">
                <i className="fa fa-bars" />
            </div>
        </div>
    </>
}
const SignInLink: React.FC = () => {
    return <Link href="/signin">Sign in</Link>
}
const HeaderLogo: React.FC = () => {
    return <div className="col-lg-3 col-md-3">
        <div className="header__logo">
            <Link href="/">
                <Image width={196}
                    height={23}
                    src="/img/logo.png"
                    alt="" />
            </Link>
        </div>
    </div>
}

const WishListOpt: React.FC = () => {
    return <>
        <Link href="#">
            <Image src="/img/icon/heart.png" alt=""
                width={18}
                height={16} />
        </Link>
    </>
}
const HeaderNavOptionsWrapper: React.FC = () => {
    return <>
        <div className="col-lg-3 col-md-3">
            <div className="header__nav__option">
                <HeaderNavOptions />
            </div>
        </div>
    </>
}
const HeaderNavOptionsWrapperMobile: React.FC = () => {
    return <>
        <div className="offcanvas-menu-overlay"></div>
        <div className="offcanvas-menu-wrapper">
            <div className="offcanvas__option">
                <div className="offcanvas__links">
                    <SignInLink />
                    <Link href="#">FAQs</Link>
                </div>
                <div className="offcanvas__top__hover">
                    <span>
                        Usd
                        <i className="arrow_carrot-down" />
                    </span>
                    <ul>
                        <li>USD</li>
                        <li>EUR</li>
                    </ul>
                </div>
            </div>
            <div className="offcanvas__nav__option">
                <HeaderNavOptions />
            </div>
            <div id="mobile-menu-wrap" />
            <div className="offcanvas__text">
                <p>Free shipping, 30-day return or refund guarantee.</p>
            </div>
        </div>
    </>
}
const HeaderNavOptions: React.FC = () => {
    return <> {/*  <SearchSwitch /> */}
        <WishListOpt /> {/* <ShoppingCartLink /> */} </>
}
