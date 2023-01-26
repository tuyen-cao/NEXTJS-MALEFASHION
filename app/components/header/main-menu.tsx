
import Link from 'next/link'
import { useSelectedLayoutSegment} from 'next/navigation';
import React from 'react'

const MainMenu: React.FC = () => {
    const segment = useSelectedLayoutSegment()
    const menuItems = [
        {
            text: "Home",
            href: "/"
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
    return <> {
        menuItems.length && <div className="col-lg-6 col-md-6">
            <nav className="header__menu mobile-menu">
                <ul key={'mainmenu'}> {
                    menuItems.map((item, i) => {
                        const isActive = segment === item.href.replace('/','') 
                        || (item.href.replace('/','') === '' && segment === null)
                       
                        return <>
                            <li key={`menuitem-${i.toString()}`}
                                className={isActive ? "active": ''}>
                                <Link href={
                                    item.href
                                }>
                                    {
                                    item.text
                                }</Link>
                            </li>
                        </>
                })
                } </ul>
            </nav>
        </div>
    } </>
}


export default MainMenu
