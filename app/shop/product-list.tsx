import ProductItem from '@/appcomponents/common/product-item'
import { API_CONSTANTS } from 'constants/api.constant';


import React from 'react'


interface Data {
    limit: number,
    products: any[],
    skip: number,
    total: number
}



export default  function ProductList () {
   
    return (
        <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
                
            <ProductItem />
            </div>
        </div>
    )
}


