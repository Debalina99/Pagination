import React,{useState,useEffect} from 'react';
import ProductCard from './ProductCard';
import '../App.css';
const PAGE_SIZE=10;
const PaginationComponent=()=>{
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch("https://dummyjson.com/products").then(res=>res.json()).then(data=>setProducts(data.products));
    },[]);
    const totalProducts=products.length;
    const noofPages=Math.ceil(totalProducts/PAGE_SIZE);
    return !products.length ? (<span>No product found</span>):
    (
        <div>
            <h3>Pagination Component</h3>
            <div className='products-container'>
            {products.map((p,ind)=>(
                <ProductCard key={ind} images={p.thumbnail} title={p.title} price={p.price} rating={p.rating} />
            ))}
            </div>
        </div>
    )
}

export default PaginationComponent;