import React from "react";
import { ImPlus } from "react-icons/im";
import { ImMinus } from "react-icons/im";

 const OneProduct = (props) => {


  return (
    

    <div className ="card" style={{ margin: 50, borderStyle: "dashed" }}>
        <img className= "card-img-top" src="https://www.jasmin.rs/media/catalog/product/cache/76b8c100e2cd4c61926cfb170351b2a4/3/6/3614272450554_4_1.jpg" alt = "Puder"/>
        <div className="card-body">
            <h3 className = "card-title">{props.prodName}</h3>
            <p className="card-text">{props.prodDesc}</p>
            <a button className="btn">
              <ImPlus />
            </a>
            <a button className="btn">
              <ImMinus />
            </a>
        </div>

    </div>
  );
};

export default OneProduct;

    