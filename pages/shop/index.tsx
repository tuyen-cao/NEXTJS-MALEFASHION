import Link from 'next/link'
import { ReactElement, useState } from 'react';
import Head from 'next/head';
import { Layout, TwoColsLayout } from '@/components/common/layout';
import LeftSidebar from '@/components/common/left-sidebar';
import { fetchProduct } from '@/services';
import { Product, ProductListProps } from '@/models';
import ProductItem from '@/components/product-item/product-item';
import Pagination from '@/components/common/pagination';
import { InferGetStaticPropsType } from 'next';
import { paginate } from '@/utilities/helper-functions';
import { NUMOFITEMPERPAGE } from '@/constants/product.constant';
import { cookies } from 'next/headers';

const Shop = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
    
    if (data?.totalItems === 0 || data === undefined) return <><p>There is not product</p></>
    return (
        <>
            <div>
                Shop page
                <p>
                    <Link href="/shop/shopping-cart">Shopping cart</Link>
                </p>

                <ProductList listProps={data} />
            </div>
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
    const response = await fetchProduct({
        urlparams: `limit=200`,
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZyIsImlhdCI6MTY3NTIzODM2NiwiZXhwIjoxNjc1MjQxOTY2fQ.iApMNjQF_6dGIqk3pPuMTdfFScs9Oz5bM01tigu25oM'
        }
    })
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
    const data: ProductListProps = {
        products: products,
        totalItems: products.length
    }
    return {
        props: {
            data
        }
    };
}


const ProductList: React.FunctionComponent<{ listProps: ProductListProps | undefined }> = (props) => {
    const { listProps } = props
    const [currentPage, setCurrentPage] = useState(1);
    const paginatedPosts = paginate(listProps!.products, currentPage, NUMOFITEMPERPAGE);

    const handlePageClick = (event: number) => {
        setCurrentPage(event + 1)
    }

    return (
        <div className='row' key={`product-list-row`}>
            {paginatedPosts.map((product: Product) => {
                return <div className="col-lg-4 col-md-6 col-sm-6" key={`product-list-col-${product.id}`}>
                    <ProductItem key={`product-${product.id}`} product={product} />
                </div>
            })}
            <Pagination totalItems={listProps?.totalItems} onPageChange={handlePageClick} />
        </div>
    )
}


