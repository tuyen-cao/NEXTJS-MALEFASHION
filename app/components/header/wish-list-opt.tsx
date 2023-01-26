import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const WishListOpt: React.FC = () => {
    return <>
        <Link href="#">
            <Image src="/img/icon/heart.png" alt=""
                width={18}
                height={16}/>
        </Link>
    </>
}

export default WishListOpt
