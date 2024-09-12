import React, { useContext, useState } from 'react';

import './PopularProduct.css';

import { useDispatch, useSelector } from 'react-redux';
// import { setClick } from '../../slices/CounterSlice';
const PopularProduct = () => {

    const {data}= useSelector((state)=> state.products)
    console.log(data, 'popularproduct data')
    const dispatch= useDispatch()
    // const handleClick = (id)=>{
    //     dispatch(setClick(id))
    // }
   
    return (
        <div className="popularproduct">
            <h1>Most Popular Products</h1>
            <div className="popularproducts">
                {data && data.map((product) => (
                    <div className="card" key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <div className="card-body">
                            <h5>{product.title}</h5>
                            <p>{product.price}</p>
                           
                            {/* <button className='btn btn-primary' onClick={() => handleClick(product)}>Add To Cart</button> */}
                        
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularProduct;
