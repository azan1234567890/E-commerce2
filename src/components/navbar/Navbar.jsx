import React, { useContext, useState, useEffect } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
import { useDispatch, useSelector } from 'react-redux';
import { Increment,Decrement, multiply, divide } from '../../slices/CalcularSlice';
const Navbar = () => {
  const count =useSelector((state)=>state.calculater.value)
  const dispatch = useDispatch();

// {  //Make A Calculater
//   // const [number,setNumber] = useState('')
//   // const [number1,setNumber1] = useState('')
// // const Number1 = (e)=>{
// // setNumber(e.target.value)
// // }
// // const Number2 = (e)=>{
// // setNumber1(e.target.value)
// // }}
  return (
    <>
      <nav className="navbar py-3 px-4">
        <div className="logo">
          <h4>CremipeStore</h4>
          <div>
       
      </div>
        </div>
        <div className="navbar-item">
          <ul className='d-flex mt-3'>
            <li className='pe-5'>Home</li>
            <li className='pe-5'>About</li>
            <li className='pe-5'>Shop</li>
            <li className='pe-5'>Contact</li>
          </ul>
         
          {/* <button className='btn btn-primary' onClick={()=>dispatch(Increment())}>Increment</button>
          {count}
          <button className='btn btn-secondary' onClick={()=>dispatch(Decrement())}>Decrement</button> */}


          {/* Make A Calculer */}
          {/* <input type="number"  onChange={Number1}/>
          <input type="number" onChange={Number2} />
          <button className='btn btn-primary' onClick={()=>dispatch(Increment({value1: number , value2: number1})) } >+</button>
          <button className='btn btn-secondary' onClick={()=>dispatch(Decrement({value1: number , value2: number1})) }>-</button>
          <button className='btn btn-danger' onClick={()=>dispatch(multiply({value1: number , value2: number1})) }>*</button>
          <button className='btn btn-warning' onClick={()=>dispatch(divide({value1: number , value2: number1})) }>/</button> */}
         
        </div>
        <div className="">
          <FaShoppingCart
            className='cart-logo mx-5'
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
            size={20}
          />
          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">Your Cart</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul>
                {/* {products && products.map((items) => (
                  <li key={items.id}>
                    {items.title}- ${items.price} - {items.stock} */}
                    {/* <button className='btn btn-primary' onClick={()=>Increment(product)}>+</button>
                    <button className='btn btn-primary' onClick={()=>Decrement(product)}>-</button> */}
                  {/* </li> */}
                {/* //  ))}  */}
              </ul>

            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
