import React from "react";
import  OneProduct  from "./oneProduct";



const Products = () => {
  const name = "New Product Name";
  const description = "New description";
  return (
    <div className="all-products">
        <OneProduct prodName = {name} prodDesc = {description}/>
        <OneProduct prodName = {name} prodDesc = {description}/>
        <OneProduct prodName = {name} prodDesc = {description}/>

       

    </div>
  );
};

export default Products;