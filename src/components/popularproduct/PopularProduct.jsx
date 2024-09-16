import React, { useContext, useState } from 'react';
import {setCart} from '../../slices/cartSlice';

import './PopularProduct.css';

import { useDispatch, useSelector } from 'react-redux';
const PopularProduct = () => {
    const {products}= useSelector((state)=> state.products)
    const dispatch= useDispatch()
    const handleClick = (items) => {
        dispatch(setCart(items))
    }
   
    return (
        <div className="popularproduct">
            <h1>Most Popular Products</h1>
            <div className="popularproducts">
                {products && products.map((items) => (
                    <div className="card" key={items.id}>
                        <img src={items.image} alt={items.title} />
                        <div className="card-body">
                            <h6>{items.title}</h6>
                            <p>$ {items.price}</p>
                           
                            <button className='btn btn-primary' onClick={() => handleClick(items)}>Add To Cart</button>
                        
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularProduct;
