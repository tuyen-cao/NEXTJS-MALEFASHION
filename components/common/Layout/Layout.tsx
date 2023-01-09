import { layoutProps } from "../../../models/types"
import Breadcrumbs from "../Breadcrumbs"
import Footer from "../Footer"
import Header from "../Header"

const Layout = ({ children }: layoutProps) => {
    return <>
        <Header/>
        <Breadcrumbs />
        {children}
        <Footer/>
    </>}

export default Layout