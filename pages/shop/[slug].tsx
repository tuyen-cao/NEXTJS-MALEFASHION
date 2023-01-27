import React from 'react'
import { Product } from '@/models'
import { fetchProduct } from '@/services'
import { GetStaticProps, GetStaticPropsContext } from 'next'

const ProductDetailPage: React.FC<{ product: Product }> = (props) => {
    const product = props.product
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
        fallback: false,
    };
}



export const getStaticProps: GetStaticProps<{ product: Product }> = async (context: GetStaticPropsContext) => {
    const { slug } = context.params!

    if (!slug) return { notFound: true }

    const response = await fetchProduct()
    if (response.data === undefined) return { notFound: true }

    const product = response?.data?.products.find((product: Product) => product.id === Number(slug))

    if (!product) return { notFound: true }

    return {
        props: { product }
    };
}
