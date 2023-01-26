import React from 'react'
import styled from 'styled-components'
import WishListButton from './btn-wish-list'
import Rating from './rating'

const ProductItem: React.FC = () => {
    return (
        <>
            <ProductItemStyled className="product__item">
                <ThumbnailStyled className="product-item__pic set-bg">
                    {/* <Thumbnail alt={
                            product.title
                        }
                        src={
                            product.image
                        }/> {
                    props.product.type !== PRODUCTTYPES.BEST_SELLERS ? <span className="label">
                        {
                        product.type
                    }</span> : null
                } */}
                    <ul className="product__hover">
                        <li>
                            <WishListButton/>
                        </li>
                        <li>
                            <a href="#">
                                <img src="img/icon/compare.png" alt=""/>{" "}
                                <span>Compare</span>
                            </a>
                        </li>
                    </ul>
                </ThumbnailStyled>
                <div className="product-item__text">
                    <h6>
                        product.title
                    </h6>
                    <AddToCartStyled className="add-cart">
                        + Add To Cart
                    </AddToCartStyled>
                    <Rating rate = {3}/>
                    <h5>
                        product.price
                    </h5>
                </div>
            </ProductItemStyled>
        </>
    )
}

export default ProductItem


const ThumbnailStyled = styled.div `
    background: #f1f1f1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Thumbnail = styled.img `
    max-height: 180px;
    object-fit: cover;
    max-width: 80%;
`;

const ProductItemStyled = styled.div `
    &:hover {
        .add-cart {
            top: 22px;
            opacity: 1;
            visibility: visible;
        }
    }
    button {
        border:0;
        outline:0;
        padding: 0;
        margin: 0;
        background: none;
    }
`;

const AddToCartStyled = styled.button `
    font-size: 15px;
    color: #e53637;
    font-weight: 700;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all, 0.3s;
    -o-transition: all, 0.3s;
    transition: all, 0.3s;
`;
