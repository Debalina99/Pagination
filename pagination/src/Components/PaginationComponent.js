import React,{useState,useEffect} from 'react';
import ProductCard from './ProductCard';
import '../App.css';
import { PAGE_SIZE } from './Constants';

const PaginationComponent=()=>{
    const [products,setProducts]=useState([]);
    const [currentPage,setCurrentPage]=useState(0);

    useEffect(()=>{
        fetch("https://dummyjson.com/products").then(res=>res.json()).then(data=>setProducts(data.products));
    },[]);

    const totalProducts=products.length;
    const noofPages=Math.ceil(totalProducts/PAGE_SIZE);
    const start=currentPage*PAGE_SIZE;
    const end=start+PAGE_SIZE;
    const handlePageChange=(n)=>{
        setCurrentPage(n);
    }
    const gotoNextPage=(()=>{
        setCurrentPage((prev)=>prev+1);
    })
    const gotoPrevPage=(()=>{
        setCurrentPage((prev)=>prev-1);
    })
    return !products.length ? (<span>No product found</span>):
    (
        <div>
            <h3>Pagination Component</h3>
            <div className='pagination-container'>
                {start>0 && <span className='page-number' onClick={()=>gotoPrevPage()}>◀</span>}
                {[...Array(noofPages).keys()].map(n=> 
                <span className={"page-number " + (n === currentPage ? "active" : "")}  key={n} onClick={()=> handlePageChange(n)}>
                    {n}
                </span>)}
                {noofPages>=currentPage && <span className='page-number' onClick={()=>gotoNextPage()}>▶</span>}
            </div>
            <div className='products-container'>
            {products.slice(start,end).map((p,ind)=>(
                <ProductCard key={ind} images={p.thumbnail} title={p.title} price={p.price} rating={p.rating} />
            ))}
            </div>
            
        </div>
    )
}

export default PaginationComponent;