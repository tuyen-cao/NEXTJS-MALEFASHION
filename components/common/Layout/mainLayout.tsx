import {LayoutProps} from "@/models/common"
import Head from "next/head"
import Breadcrumbs from "../breadcrumbs/breadcrumbs"
import Footer from "../footer/footer"
import { Header } from "../header/header"

export const Layout: React.FC < {
    children: LayoutProps
} > = (props) => {
    const {children} = props
    return <>
        <Head>
            <title>Home page</title>
        </Head>
        <Header/>
        <Breadcrumbs/> {children}
        <Footer/>
    </>
}
