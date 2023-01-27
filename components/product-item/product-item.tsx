import { PRODUCTTYPES } from '@/constants/product.constant'
import { Product } from '@/models'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import ProductItemStyle from "./product-item.module.scss"

const ProductItem: React.FC<{ product: Product }> = (props) => {
  const {product} = props


  return <div className={`product__item ${clsx({sale:product.discountPercentage > 0 })}`}>
    <div className={`product__item__pic set-bg ${ProductItemStyle.product__item__thumbnail}`}>
      <Image alt={product.title}
        src={product.thumbnail}
        fill />
        <span className="label">{product.discountPercentage > 0 
          ? PRODUCTTYPES.SALE
          : PRODUCTTYPES.NEW}</span>
      <ul className="product__hover">
        <li><a href="#"><Image src="/img/icon/heart.png" alt="" width={38} height={36}/></a></li>
        <li><a href="#"><Image src="/img/icon/compare.png" alt=""  width={38} height={36}/> <span>Compare</span></a></li>
        <li><Link href={`/shop/${product.title}`}><Image src="/img/icon/search.png" alt=""  width={38} height={36}/></Link></li>
      </ul>
    </div>
    <div className="product__item__text">
      <h6>{product.title}</h6>
      <a href="#" className="add-cart">+ Add To Cart</a>
      <div className="rating">
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star-o"></i>
      </div>
      <h5>{`$${product.price.toFixed(2)}`}</h5>
    </div>
  </div>

}

export default ProductItem
