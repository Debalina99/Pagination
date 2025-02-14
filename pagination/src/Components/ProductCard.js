import React from "react";
import '../App.css';
const ProductCard=({images,title,price,rating})=>{
return(
    <div className="product-card">
        <img src={images} alt={title} className="product-img"/>
        <p>{title}</p>
        <div className="secondaryCard">
            <span>Price: {price}</span>
            <span>Rating: {rating}</span>
        </div>
    </div>
)
}
export default ProductCard;