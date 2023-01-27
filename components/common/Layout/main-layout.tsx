import { LayoutProps } from "@/models/common"
import Head from "next/head"
import Breadcrumbs from "../breadcrumbs/breadcrumbs"
import Footer from "../footer/Footer"
import Header from "../header/header"

export const Layout: React.FC<LayoutProps> = ({children}) => {
    return <>
        <Head>
            <title>Home page</title>
        </Head>
        <Header key={`header`} />
        <Breadcrumbs key={`breadcrumbs`} />
        {children}
        <Footer />
    </>
}