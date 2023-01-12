import Image from 'next/image'
import Link from 'next/link'
import {ReactElement} from 'react';
import LeftSideBar from '../../components/common/leftSideBar';
import {Layout, TwoColsLayout } from '@/components/common/layout';
import Head from 'next/head';

const Shop = ( /* { bbb }: any */
) => { // console.log(bbb)
    return (
        <>

            <div>
                Shop page
                <p>
                    <Link href="/shop/shopping-cart">Shopping cart</Link>
                </p>
                <Image src="/img/hero/hero-1.jpg"
                    // Route of the image file
                    height={107}
                    // Desired size with correct aspect ratio
                    width={256}
                    // Desired size with correct aspect ratio
                    alt="Your Name"
                /> {/* <ul>
                    {bbb.map((product: any, i:number) => {

                        return <li key={`pro_${i}`}><Link href={`http://localhost:4500/products/${product.id}`}>{product.title}</Link></li>
                    })}
                </ul> */} </div>
        </>
    )
}

export default Shop


Shop.getLayout = function getLayout(page : ReactElement) {
    return (
        <Layout>
            <Head>
                <title>SHOP page</title>
            </Head>
            <TwoColsLayout>
                <LeftSideBar>
                    <p>Side bar</p>
                    <p>Side bar gfjdsgfjfjhfjfgh</p>
                </LeftSideBar>
                <div className="col-lg-9">
                    {page}</div>
            </TwoColsLayout>
        </Layout>
    )
}


/* 
export async function getStaticProps() {

    const aaaa = await fetch("http://localhost:4500/products").then(
        (results) => results.json()
    )

    const bbb = aaaa.map((post: any) => {
        return {

            id: post.id,
            title: post.title
        };
    });
    return {
        props: { bbb }
    };
} */
