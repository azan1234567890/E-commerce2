import React, { useState, useEffect, useContext } from "react";

import Banner from "../../components/banner/Banner";
import Products from "../../components/products/Products";
import PopularProduct from "../../components/popularproduct/PopularProduct";
import { memo } from "react";
import { useDispatch } from "react-redux";
import ProductApis from "../../apis/Api";
import { setProduct } from "../../slices/productSlice";
import Footer from "../../components/footer/Footer";
import { totalPrice } from "../../slices/CounterSlice";
import { getAuth2 } from "../../apis/Api";
const Home = () => {


  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await ProductApis.getProduct();
// const login = await getAuth2();
// console.log(login, 'login')

        dispatch(setProduct(data.data));
      
      } catch (error) {
        console.log("error");
      }
    };

    fetchProduct();


  }, []);

  return (
    <>
      <Banner />
      <Products />
      <PopularProduct />
      <Footer />
    </>
  );
};
export default memo(Home);
