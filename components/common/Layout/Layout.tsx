import { layoutProps } from "../../../models/types"
import Footer from "../Footer"
import Header from "../Header"

const Layout = ({ children }: layoutProps) => {
    return <>
        <Header/>
        {children}
        <Footer/>
    </>
}

export default Layout