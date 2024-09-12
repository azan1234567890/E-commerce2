import React, { useState, useEffect, useContext } from "react";

import Banner from "../../components/banner/Banner";
import Products from "../../components/products/Products";
import PopularProduct from "../../components/popularproduct/PopularProduct";
import { memo } from "react";
import { useDispatch } from "react-redux";
import ProductApis from "../../apis/Api";
import { setProduct, errorProduct } from "../../slices/CounterSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await ProductApis.getProduct();
     
        dispatch(setProduct(data.data));
      } catch (error) {
        console.log('error');
      }
    };

    fetchProduct();
  }, []);

  return (
    <>
      <Banner />
      <Products />
      <PopularProduct />
    </>
  );
};
export default memo(Home);
