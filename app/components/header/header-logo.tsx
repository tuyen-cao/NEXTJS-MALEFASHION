import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeaderLogo: React.FC = () => {
    return <div className="col-lg-3 col-md-3">
        <div className="header__logo">
            <Link href="/">
                <Image width={196}
                    height={23}
                    src="/img/logo.png"
                    alt=""/>
            </Link>
        </div>
    </div>
}


export default HeaderLogo
