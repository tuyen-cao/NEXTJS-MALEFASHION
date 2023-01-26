import '@/assets/scss/global.scss'

import "@/assets/css/font-awesome.min.css"
import '@/assets/css/elegant-icons.css'
import "@/assets/css/magnific-popup.css"
import "@/assets/css/nice-select.css"
import "@/assets/css/owl.carousel.min.css"
import "@/assets/css/slicknav.min.css"

import '@/assets/scss/style.scss'
import {Nunito_Sans} from '@next/font/google'

import layoutStyle from "./layout.module.scss"

import {memo} from 'react'
import Footer from "./components/footer/footer"
import {Header} from "./components/header"
import Breadcrumbs from "./components/breadcrums"
import {SWRConfig} from "swr"


// If loading a variable font, you don't need to specify the font weight
const nunito_Sans = Nunito_Sans({
    subsets: ['latin'],
    weight: [
        "300",
        "400",
        "600",
        "700",
        "800",
        "900"
    ]
})

const RootLayout = ({children} : {
    children: React.ReactNode
}) => {
    return (
        <html>
            <head/>
            <body className={
                nunito_Sans.className
            }>
              
                    <div className={
                        layoutStyle.bodyWrapper
                    }>
                        <Header/>
                        <Breadcrumbs key={"Breadcrums"}/>
                        <div className={
                            layoutStyle.mainContainer
                        }>
                            {children} </div>
                        <Footer/>
                    </div>
              
            </body>
        </html>
    )
}

export default memo(RootLayout)
