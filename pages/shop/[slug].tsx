import React from 'react'
import { Product } from '@/models'
import { fetchProduct, fetchProductDetail } from '@/services'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'

const ProductDetailPage: React.FC<{ product:Product }> = (props) => {
    const product = props.product
    const router = useRouter()

    if(router.isFallback) return <div><strong>Loading</strong></div>

    return (
        <div>
            {product.title} ====== {product.price}
        </div>
    )
}

export default ProductDetailPage

export async function getStaticPaths() {
    const response = await fetchProduct()

    return {
        paths: response?.data?.products.map((product: Product) => ({ params: { slug: product.id.toString() } })),
        fallback: true,
    };
}



export const getStaticProps: GetStaticProps<{ product: Product }> = async (context: GetStaticPropsContext) => {
    const { slug } = context.params!

    if (!slug) return { notFound: true }

    const response = await fetchProductDetail( Number(slug))
    if (response.data === undefined) return { notFound: true }

    const product = response?.data

    if (!product) return { notFound: true }

    return {
        props: { 
            product: product 
        },
        revalidate: 3
    };
}
