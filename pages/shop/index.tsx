import Image from 'next/image'
import Link from 'next/link'
import { ReactElement } from 'react';
import Head from 'next/head';
import { Layout, TwoColsLayout } from '@/components/common/layout';
import LeftSidebar from '@/components/common/left-sidebar';
import { fetchProduct } from '@/services';
import { Product } from '@/models';
import ProductItem from '@/components/product-item/product-item';

const Shop = ({ products }: {
    products: Product[]
}) => {
    if (products.length === 0) return <><p>There is not product</p></>
    return (
        <>
            <div>
                Shop page
                <p>
                    <Link href="/shop/shopping-cart">Shopping cart</Link>
                </p>
                <ProductList  list={products} />
                {/* <ul>
                    {bbb.map((product: any, i:number) => {

                        return <li key={`pro_${i}`}><Link href={`http://localhost:4500/products/${product.id}`}>{product.title}</Link></li>
                    })}
                </ul> */} </div>
        </>
    )
}

export default Shop


Shop.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            <Head>
                <title>SHOP page</title>
            </Head>
            <TwoColsLayout>
                <LeftSidebar>
                    <p>Side bar</p>
                    <p>Side bar gfjdsgfjfjhfjfgh</p>
                </LeftSidebar>
                <div className="col-lg-9">
                    {page}</div>
            </TwoColsLayout>
        </Layout>
    )
}


export async function getStaticProps() {
    const response = await fetchProduct()
    if (response.data === undefined) return {
        props: { products: [] }
    };


    const products = response?.data?.products.map((product: Product) => {
        return {
            id: product.id,
            title: product.title,
            price: product.price,
            discountPercentage: product.discountPercentage,
            rating: product.rating,
            stock: product.stock,
            brand: product.brand,
            category: product.category,
            thumbnail: product.thumbnail
        };
    });
    return {
        props: { products: products }
    };
}


export const ProductList: React.FC<{ list: Product[] }> = (props) => {
    const list = props.list

    return (
        <div className='row' key={`product-list-row`}>
            {list.map((product: Product) => {
                return <div className="col-lg-4 col-md-6 col-sm-6"  key={`product-list-col-${product.id}`}>
                    <ProductItem key={`product-${product.id}`} product={product} />
                </div>
            })}
        </div>
    )
}