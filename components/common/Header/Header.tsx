import React, { ReactEventHandler, useEffect } from "react"

/* import ShoppingCartLink from "./utilities/ShoppingCartLink"
import { useTypedSelector } from "store";
import { addToCart, selectedProducts } from "reducers/productsReducer";
import { useDispatch } from "react-redux";
import { BasketItem } from "models/types"; */
import Link from "next/link";
import Image from "next/image";


const Header: React.FC = () => {
 // const dispatch = useDispatch()
  //const productInCart = useTypedSelector(selectedProducts);
  useEffect(() => {
      /* const localStorageProductsInCart = localStorage.getItem("productsInCart");
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
          {/* Offcanvas Menu Begin */}
          <div className="offcanvas-menu-overlay" ></div>
          <div className="offcanvas-menu-wrapper">
              <div className="offcanvas__option">
                  <div className="offcanvas__links">
                      <Link href="#">Sign in</Link>
                      <Link href="#">FAQs</Link>
                  </div>
                  <div className="offcanvas__top__hover">
                      <span>
                          Usd <i className="arrow_carrot-down" />
                      </span>
                      <ul>
                          <li>USD</li>
                          <li>EUR</li>
                      </ul>
                  </div>
              </div>
              <div className="offcanvas__nav__option">
                 {/*  <SearchSwitch /> */}
                  <Link href="#">
                      <Image width={18} height={16} src="/img/icon/heart.png" alt="" />
                  </Link>
                 {/*  <ShoppingCartLink /> */}
              </div>
              <div id="mobile-menu-wrap" />
              <div className="offcanvas__text">
                  <p>Free shipping, 30-day return or refund guarantee.</p>
              </div>
          </div>
          {/* Offcanvas Menu End */}
          {/* Header Section Begin */}
          <header className="header">
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
                                      <Link href="#">Sign in</Link>
                                      <Link href="#">FAQs</Link>
                                  </div>
                                  <div className="header-top__hover">
                                      <span>
                                          Usd <i className="arrow_carrot-down" />
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
              <div className="container">
                  <div className="row">
                      <div className="col-lg-3 col-md-3">
                          <div className="header__logo">
                              <Link href="./">
                                  <Image width={196} height={23} src="/img/logo.png" alt="" />
                              </Link>
                          </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                          <nav className="header__menu mobile-menu">
                              <ul>
                                  <li className="active">
                                      <Link href="/">Home</Link>
                                  </li>
                                  <li>
                                      <Link href="shop">Shop</Link>
                                  </li>
                                  <li>
                                      <Link href="#">Pages</Link>
                                      <ul className="dropdown">
                                          <li>
                                              <Link href="./about.html">About Us</Link>
                                          </li>
                                          <li>
                                              <Link href="./shop-details.html">Shop Details</Link>
                                          </li>
                                          <li>
                                              <Link href="./shopping-cart.html">Shopping Cart</Link>
                                          </li>
                                          <li>
                                              <Link href="./checkout.html">Check Out</Link>
                                          </li>
                                          <li>
                                              <Link  href="./blog-details.html">Blog Details</Link>
                                          </li>
                                      </ul>
                                  </li>
                                  <li>
                                      <Link href="./blog.html">Blog</Link>
                                  </li>
                                  <li>
                                      <Link href="./contact.html">Contacts</Link>
                                  </li>
                              </ul>
                          </nav>
                      </div>
                      <div className="col-lg-3 col-md-3">
                          <div className="header__nav__option">
                             {/*  <SearchSwitch /> */}
                              <Link href="#">
                                  <Image src="/img/icon/heart.png" alt="" width={18} height={16}  />
                              </Link>

                              {/* <ShoppingCartLink /> */}
                          </div>
                      </div>
                  </div>
                  <div className="canvas__open">
                      <i className="fa fa-bars" />
                  </div>
              </div>
          </header>
          {/* Header Section End */}
      </>
  )
}

export default Header
