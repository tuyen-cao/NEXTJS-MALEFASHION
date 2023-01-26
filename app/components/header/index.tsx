"use client" 

import React, {ReactEventHandler, useEffect} from "react"

/* import ShoppingCartLink from "./utilities/ShoppingCartLink"
import { useTypedSelector } from "store";
import { addToCart, selectedProducts } from "reducers/productsReducer";
import { useDispatch } from "react-redux";
import { BasketItem } from "models/types"; */

import HeaderTop from "./header-top";
import MainHeader from "./main-header";
import HeaderLogo from "./header-logo";
import MainMenu from "./main-menu";
import HeaderNavOptionsWrapper from "./header-nav-opts-wrapper";
import HeaderNavOptionsWrapperMobile from "./header-nav-opts-wrapper-mobile";

export const Header: React.FC = () => {
    return (
        <>
            <HeaderNavOptionsWrapperMobile/>
            <header className="header">
                <HeaderTop/>
                <MainHeader>
                    <>
                        <HeaderLogo/>
                        <MainMenu/>
                        <HeaderNavOptionsWrapper/>
                    </>
                </MainHeader>
            </header>
        </>
    )
}


