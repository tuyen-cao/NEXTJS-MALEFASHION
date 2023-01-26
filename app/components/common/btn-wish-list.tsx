'use client'
import React from 'react'

const WishListButton:React.FC = () => {
    const handleClick = () => {
        console.log("wishlist btn clicked!")
    }
    return (
        <button onClick={handleClick}>
            <img src="img/icon/heart.png" alt=""/>
        </button>
    )
}

export default WishListButton
