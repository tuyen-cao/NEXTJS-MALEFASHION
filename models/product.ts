export interface Product {
    id: number,
    title: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock:number,
    brand: string,
    category: string,
    thumbnail: string
}

export interface ProductListProps {
    products: Product[],
    totalItems: number
}