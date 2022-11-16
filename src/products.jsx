import React from "react";
import  OneProduct  from "./oneProduct";



const Products = ({products}) => {
  //const name = "New Product Name";
  //const description = "New description";
  return (
    <div className="all-products">
        <OneProduct product = {products[0]}/>
        <OneProduct product = {products[1]}/>
        <OneProduct product = {products[2]}/>

       

    </div>
  );
};

export default Products;